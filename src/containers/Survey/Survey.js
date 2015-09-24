import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DocumentMeta from 'react-document-meta';
import {initialize} from 'redux-form';
import {SurveyForm} from 'components';

@connect(
  () => ({}),
  dispatch => bindActionCreators({initialize}, dispatch)
)
export default class Survey extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  }

  handleSubmit(data) {
    window.alert('Data submitted! ' + JSON.stringify(data));
    this.props.initialize('survey', {});
  }

  handleInitialize() {
    this.props.initialize('survey', {
      name: 'zan',
      email: 'root@zanjs.com',
      occupation: '前段打杂工'
    });
  }

  render() {
    return (
      <div className="container">
        <h1>调查:</h1>
        <DocumentMeta title="React Redux Example: Survey"/>
        <div style={{textAlign: 'center', margin: 15}}>
          <button className="btn btn-primary" onClick={::this.handleInitialize}>
            <i className="fa fa-pencil"/> 初始化 表单
          </button>
        </div>
        <SurveyForm onSubmit={::this.handleSubmit}/>
      </div>
    );
  }
}
