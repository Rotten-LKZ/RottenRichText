import React, { Component } from 'react';
import Title from './Title';
import Functions from './Functions';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    let { title, titleMaxLength, functions } = this.props;

    // TODO: 自定义配置
    const defaultFunctions = [
      [
        ["rotten:header"], ["rotten:bold"], ["rotten:strikethrough"]
      ], 
      [
        ["rotten:size"], ["rotten:color"]
      ],
      [
        ["rotten:quote"], ["rotten:separator"], ["rotten:align"], ["rotten:list"]
      ],
      [
        ["rotten:url"], ["rotten:image"], ["bilibili:url"],
      ]
    ]
    functions = functions === undefined ? defaultFunctions : functions;

    this.state = {
      // 用户传递
      title: title === undefined ? "" : title,
      titleMaxLength: titleMaxLength,
      functions: functions,

      // 程序新增

    };

    this.changeTitle = this.changeTitle.bind(this);
  }

  render() {
    return (
      <div className="editor">
        <Title 
          placeholder={this.props.placeholder === undefined ? "" : this.props.placeholder} 
          title={this.state.title}
          titleMaxLength={this.state.titleMaxLength}
          setTitle={this.changeTitle}
        />
        <Functions f={this.state.functions} />
      </div>
    )
  }

  changeTitle(title) {
    this.setState({
      title: title,
    });
  }
}
