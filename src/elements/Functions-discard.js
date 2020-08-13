import React, { Component } from 'react';
import { evil } from '../functions/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold } from '@fortawesome/free-solid-svg-icons';

export default class Functions extends Component {
  constructor(props) {
    super(props);
    const icons = {
      // 官方 绝对遵循标准markdown格式
      rotten: {
        header: "", // 标题
        bold: "", // 粗体
        strikethrough: "", // 删除线
        size: "", // 字体大小
        color: "", // 颜色
        quote: "", // 引用
        separator: "", // 分割线
        align: "", // 文字对齐
        list: "", // 列表
        url: "", // 链接
        image: "", // 图片
      }, 
      // 第三方（部分也是官方写的） 不一定遵循标准markdown格式
      bilibili: {
        url: "", // B站链接
      }
    }
  }

  render() {
    return (
      <div className="editor-function">
        
      </div>
    )
  }
}
