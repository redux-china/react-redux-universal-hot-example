import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import { MiniInfoBar } from 'components';

export default class About extends Component {
  state = {
    showKitten: false
  }

  handleToggleKitten() {
    this.setState({showKitten: !this.state.showKitten});
  }

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    return (
      <div className="container">
        <h1>关于我们</h1>
        <DocumentMeta title="React China Example: 关于我们"/>

        <p>这个项目由 zan 整理
          (<a href="https://twitter.com/zanjs" target="_blank">@zanjs</a>),为初学者奉献<a href="https://github.com/redux-china" target="_blank">项目地址</a>.
        </p>

        <h3>短消息 <span style={{color: '#aaa'}}>(not that kind)</span></h3>

        <p>嘿！你找到了小信息吧！下面的部分是只显示的。需要注意的是它显示了相同的 时间作为信息栏.</p>

        <MiniInfoBar/>

        <h3>图片响应</h3>

        <p>
          Psst! 你想看看小猫吗?

          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={::this.handleToggleKitten}>
            {showKitten ? 'No! 把它拿开!' : 'Yes! 请!'}</button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
      </div>
    );
  }
}
