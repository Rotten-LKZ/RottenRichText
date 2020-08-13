import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold } from '@fortawesome/free-solid-svg-icons';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    let { title, titleMaxLength } = this.props;

    // 默认最多40字
    if (titleMaxLength === undefined) {
      titleMaxLength = 40;
    }
    titleMaxLength = parseInt(titleMaxLength);

    let nowTitleLength = 0;
    // 如果传入标题则检测标题字数
    if (title !== undefined) {
      nowTitleLength = title.length;
    }

    this.state = {
      // 用户传递
      title: title === undefined ? "" : title,
      titleMaxLength: titleMaxLength,

      // 程序新增
      nowTitleLength: nowTitleLength,
    };

    this.changeTitle = this.changeTitle.bind(this);
  }

  render() {
    return (
      <div className="editor">
        <div className="editor-title">
          <textarea 
            type="text"
            placeholder={this.props.placeholder === undefined ? "" : this.props.placeholder} 
            value={this.state.title}
            onChange={this.changeTitle}
            onKeyPress={this.titleKeyPress}
          />
          <div className="font-grey editor-title-words">{this.state.nowTitleLength}/{this.state.titleMaxLength}</div>
        </div>
        <div className="editor-function">
          <FontAwesomeIcon icon={faBold} />
        </div>
      </div>
    )
  }

  changeTitle(e) {
    let title = e.target.value;
    // 如果当前标题的长度小于等于设置的最大长度则允许输入
    if (title.length <= this.state.titleMaxLength) {
      this.setState({
        title: title,
        nowTitleLength: title.length,
      });
    }
  }

  titleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }
}
