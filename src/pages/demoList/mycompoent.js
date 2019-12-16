// 点击按钮提交输入框中的值 并在list显示; //  点击列表的一项删除

import React, { Component } from "react";
import Store from "./store/reduxTest";
import store from "./store/reduxTest";
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   list: ['1', '2']
    // }
    this.state = Store.getState();
    Store.subscribe(this.handleStoreUpdata.bind(this));
    this.handleDel = this.handleDel.bind(this);
  }
  // 点击删除的操作
  handleDel(indexs) {
    // var newList = this.state.list.map((item, index) => {
    //   if (index == indexs) {
    //     this.state.list.slice(indexs, 1);
    //   }
    // });
    Store.dispath({
      type: "DELL_DATE",
      index:indexs
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((value, index) => {
            return (
              <li
                index={index}
                key={index}
                onClick={this.handleDel.bind(this, index)}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  handleStoreUpdata() {
    this.setState(Store.getState());
  }
}
