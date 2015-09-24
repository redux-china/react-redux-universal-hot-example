import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {isLoaded as isAuthLoaded, load as loadAuth} from 'redux/modules/auth';
import * as authActions from 'redux/modules/auth';

@connect(
    state => ({user: state.auth.user}),
    dispatch => bindActionCreators(authActions, dispatch)
)
export default
class LoginSuccess extends Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func
  }

  static fetchData(store) {
    if (!isAuthLoaded(store.getState())) {
      return store.dispatch(loadAuth());
    }
  }

  render() {
    const {user, logout} = this.props;
    return (user &&
      <div className="container">
        <h1>登录成功</h1>

        <div>
          <p>Hi, {user.name}. 您刚才已经成功登录，并在这里被转发
            by <code>componentWillReceiveProps()</code> in <code>App.js</code>,  to
            通过 redux 监听再返回 auth  <code>@connect</code>. 多么激动人心！
          </p>

          <p>
            同样的功能会转发您 <code>/</code> 如果您选择退出。 可以选择下面...
          </p>

          <div>
            <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out"/>{' '}退出</button>
          </div>
        </div>
      </div>
    );
  }
}
