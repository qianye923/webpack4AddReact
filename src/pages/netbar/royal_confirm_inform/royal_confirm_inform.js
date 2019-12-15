import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nb: this.props.info
    };
    this.showBarImg = this.showBarImg.bind(this);
  }
  showBarImg() {
    console.log("fail");
  }
  componentDidMount() {
    console.log(1234);
    console.log(window.data);
    console.log(this.state.nb.info.accounts);
  }
  render() {
    var nb = this.props.info;
    return (
      <div>
        <div
          className={`config-form-wrap config-event-table config-confirm-inform`}
        >
          <ul className="rc-table-tbody">
            <li>
              <div className="column-show-small">网吧名称：</div>
              <div className="column-show-big">kaixin</div>
            </li>
            <li>
              <div className="column-show-small">网关帐号：</div>
              <div className="column-show-big">
                {this.state.nb.info.accounts}
              </div>
            </li>
            <li>
              <div className="column-show-small">详细地址：</div>
              <div className="column-show-big">{nb.addr}</div>
            </li>
            <li>
              <div className="column-show-small">地域分布：</div>
              <div className="column-show-big">{nb.location_meanings}</div>
            </li>
            <li>
              <div className="column-show-small">固定电话：</div>
              <div className="column-show-big">{nb.phone1}</div>
            </li>
            <li>
              <div className="column-show-small">机器台数：</div>
              <div className="column-show-big">{nb.computer_num}</div>
            </li>
            <li>
              <div className="column-show-small">门面照片：</div>
              <div className="column-show-big">
                <a href="#" onClick={this.showBarImg} className={`table-blue`}>
                  查看
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App info={window.data} />, document.getElementById("root"));
