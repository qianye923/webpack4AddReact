
// 点击按钮提交输入框中的值 并在list显示; //  点击列表的一项删除

import React, { Component } from "react";
import MyConponent from "../components/MyComponent";
import Store from "../store/reduxTest";

export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.addlist = this.addlist.bind(this);
  }
  addlist() { 
    Store.dispath({
      type: "ADD_LIST",
      inputValue: this.state.inputValue
    });

    // 在下次添加的时候让statede inputValue 的值为空
    this.setState({
      inputValue: " "
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={e => this.setState({ inputValue: e.target.value })}
          type="text"
        />
        <input type="button" value="添加" onClick={this.addlist} />
        <MyConponent />
      </div>
    );
  }
}
