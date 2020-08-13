import React, { Component } from 'react'

export default class Title extends Component {
  constructor(props) {
    super(props);

    let { title, titleMaxLength, setTitle } = this.props;

    // 默认最多40字
    titleMaxLength = titleMaxLength === undefined ? 40 : titleMaxLength;
    titleMaxLength = parseInt(titleMaxLength);

    // 如果传入标题则检测标题字数
    let nowTitleLength = title === undefined ? 0 : title.length;

    this.state = {
      // 传递
      title: title === undefined ? "" : title,
      titleMaxLength: titleMaxLength,
      setTitle: setTitle,

      // 新增
      nowTitleLength: nowTitleLength,
    }

    this.changeTitle = this.changeTitle.bind(this);
  }

  render() {
    return (
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
      this.state.setTitle(title);
    }
  }

  titleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }
}
