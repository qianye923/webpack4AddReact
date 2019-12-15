import React from "react";
import ReactDom from "react-dom";
import Table from "rc-table";

import "../../../styles/royal.input.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        width: 100
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 100
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        width: 200
      }
    ];
    return (
      <div className="card content-wrap">
        <div>
          <div className="flex-col text-container">
            <div className="form-col-8">
              <p className="text-name">手机号：</p>
            </div>
            <div className="form-col-8 text-content">
              <p>{this.props.netbar.mobile_hide}</p>
              <a href="javascript:void(0);" onClick={this.handleMobileBind}>
                修改
              </a>
            </div>
          </div>
          <div className="flex-col text-container">
            <div className="form-col-8">
              <p className="text-name">邮箱：</p>
            </div>
            <div className="form-col-8 text-content">
              <p>{this.props.netbar.email_hide}</p>
              <a href="javascript:void(0);" onClick={this.handleEmailBind}>
                修改
              </a>
            </div>
          </div>
          <div className="flex-col text-container">
            <div className="form-col-8">
              <p className="text-name">二次密码：</p>
            </div>
            <div className="form-col-8 text-content">
              <p>********</p>
              <a href="javascript:void(0);" onClick={this.handleTranPasswdMod}>
                修改
              </a>
            </div>
          </div>
        </div>
        <div className="carrier-table-container grey-section">
          <Table columns={columns} data={this.props.bind_info} />
        </div>
        <p>1、您的网吧可以向该运营商申请英雄联盟网吧特权的购买资格</p>
        <p>2、需求发起后，该运营商会在24小时内对您的需求进行审核</p>
        <p>3、当运营商“审批通过”后，网吧不可随意更改上级运营商</p>
      </div>
    );
  }
}

ReactDom.render(
  <App netbar={window.data.netbar} bind_info={window.data.bind_info} />,
  document.getElementById("root")
);
