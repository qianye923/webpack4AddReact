 import React from "react";
 import ReactDom from "react-dom";



 class App extends React.Component{
     constructor(props){
         super(props)
        this.state={

         }
     }
     render(){
         return(
             <div>
                开始的时候

             </div>
         )
     }
 }

 ReactDom.render(( <App />), document.getElementById('root'));
