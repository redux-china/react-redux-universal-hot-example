import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(state => ({ time: state.info.data.time }))
export default class MiniInfoBar extends Component {
  static propTypes = {
    time: PropTypes.number
  }

  render() {
    const {time} = this.props;
    return (
      <div className="mini-info-bar">
        这个信息最后加载...
        {' '}
        <span>{time && new Date(time).toString()}</span>
      </div>
    );
  }
}
