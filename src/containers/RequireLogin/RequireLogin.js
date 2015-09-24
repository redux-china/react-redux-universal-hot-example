import {Component} from 'react';

export default class RequireLogin extends Component {
  static onEnter(store) {
    return (nextState, transition) => {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, 没有登录，所以不能在这里！
        transition.to('/');
      }
    };
  }

  render() {
    return this.props.children;
  }
}
