import React, { Component } from 'react'
import axios from 'axios'
import Style from '../css/login'
import '../moke/login'
export default class App extends Component {
    login=React.createRef()
    uname=React.createRef()
    pwd=React.createRef()
    bt1=React.createRef()
    tip=React.createRef()
    text=React.createRef()
    postLogin=()=>{
        axios.post('../moke/login.js',{
            userName:this.uname.current.value,
            password:this.pwd.current.value,
        })
        .then(res=>{
            if(res.data.code=='10001'){
                this.login.current.style.display='none'
                this.text.current.innerText=res.data.msg
            }else{
                this.tip.current.innerText=res.data.msg
            }
        })
    }
  render() {
    return (
     <>
      <div ref={this.login}>登录注册<br/>
        <label htmlFor="userName">用户名:</label>
        <input type='text' id='userName' ref={this.uname}></input><br/>
        <label htmlFor="password">密码:</label>
        <input type='password' id='password' ref={this.pwd}></input>
       
        <div ref={this.tip} id='tips' className={Style.tips}></div>
        <button ref={this.bt1} onClick={this.postLogin}>登录</button>
      </div>
       <span ref={this.text}></span>
     </>
    )
  }
}
