import React, { Component } from 'react'
import axios from 'axios'
export default class App2 extends Component {
    container=React.createRef()
    uname=React.createRef()
    pwd=React.createRef()
    tips=React.createRef()
    Login=()=>{
        let url=require('../moke/login3').url+'/login2'
        axios.post(url,{
            userName:this.uname.current.value,
            password:this.pwd.current.value
        }).then(res=>{
            if(res.data.info.code=='10001'){
                this.container.current.style.display='none'
            }
            this.tips.current.innerText=res.data.info.msg
        })
    }
  render() {
    return (
     <>
      <div ref={this.container}>
        <p>登录验证</p>
        用户名:<input type='text' ref={this.uname}></input><br/>
        密码:<input type='password' ref={this.pwd}></input><br/>
        <p ref={this.tips}></p>
        <button onClick={this.Login}>登录</button>
      </div>
      
     </>
    )
  }
}
