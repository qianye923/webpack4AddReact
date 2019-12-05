import React  from "react";
import ReactDom from "react-dom";
import classNames from "classnames";

import "../../../styles/netbar.scss";


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            navbarTitle:[
                {
                    key:'nav-1',
                    id: 1,
                    title:'未领取任务',
                    act:true,
                    gift:false,
                },{
                    key:'nav-2',
                    id: 2,
                    title:'当前任务',
                    act:false,
                    gift:false,
                },{
                    key:'nav-3',
                    id: 3,
                    title:'已结束任务',
                    act:false,
                    gift:false,
                }
            ],
        }
    }
    handlenavChange=(e,item)=>{
        console.log(e)
        console.log(item)
        var newNavbarTitle=this.state.navbarTitle;

    }

     render(){
        const navbarBtn=this.state.navbarTitle.map((item,index)=>{
           return( <a key={index}  href="#" className={classNames({'act':item.act})} onClick={(e)=>{this.handlenavChange(e,item)}}>{item.title}</a>)
           
        });

        const columns = [
            {
                key:'name',
                dataIndex: 'name',
                title: '任务名称',
                width:260,
                render:(value, row, index, text) => ({ children: value })
            },
            { title: '生效周期', dataIndex: 'task_time', key:'recycle', width: 220 },
            { title: '奖励', dataIndex: 'award_info', key:'type', width: 260 },
            {
                title: '完成状态',
                dataIndex: 'mission',
                key:'mission',
                width: 174,
                render: (value,row,index) => <span>{ row.taskStatusHtml }</span>
            }
        ];
         return (
             <div>
               <div className="top-tabBar">
                 <div className="topbar-contain">
                      {navbarBtn}
                 </div>
               </div>
             </div>
         )
     }
}

ReactDom.render((<App />), document.getElementById('root'));