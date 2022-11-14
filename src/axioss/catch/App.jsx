import React, { Component } from 'react'

import axios from 'axios'
export default class App extends Component {
    state={
        error:'',
        email:'',
        success:null
    }
    handelClick=()=>{
        axios('https://randomuser.me/api')
        .then(res=>{
            this.setState({
                email:res.data.results[0].email,
                success:true
            })
        })
        .catch(error=>{
            console.log('error',error);
            console.log('error.response.data',error.response.data);
            this.setState({
                error:error.response.data,
                success:false
            })
        })
    }
  render() {
    let {email,success,error}=this.state
    return (
      <div>catch练习
        <button onClick={this.handelClick}>单击获取数据</button>
        {
            success?<p>{email}</p>:<p>{error}</p>
        }
      </div>
    )
  }
}
