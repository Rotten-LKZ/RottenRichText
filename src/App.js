import React from 'react';
import Editor from './elements/Editor';
import './styles/normal.css';

export default function App() {
  return (
    <div style={{width: "60%", paddingTop: "50px"}}>
      <Editor
        placeholder="请输入标题"
      />
    </div>
  );
}