import React, { Component } from 'react'
import $ from 'jquery'
import '../moke/login'
export default class App extends Component {
    state={
        tips:''
    }
    uname=React.createRef();
    pswd=React.createRef();
    tip=React.createRef()
     Login=()=>{
        let {tips}=this.state
        $.ajax({
            url:'../moke/login.php',
            type:'post',
            data:JSON.stringify({userName:this.uname.current.value,password:this.pswd.current.value}),
            contentType:'applocation/json',
            dataType:'json',
            success:(data)=>{
                console.log(data);
                if(data.code=='10001'){
                    location.href='www.baidu.com'
                }else{
                    this.setState({
                        tips:data.mse
                      })
                }
            }
        })
        
     }
  render() {
    return (
      <div>欢迎登录
        <label htmlFor='name'>用户名:</label>
        <input type='text' id='name' ref={this.uname}></input><br/>
        <label htmlFor='pwd'>密码:</label>
        <input type='text' id='pwd' ref={this.pswd}></input><br/>
        <p ref={this.tip}>{this.state.tips}</p>
        <button onClick={this.Login}>登录</button>
      </div>
    )
  }
}
