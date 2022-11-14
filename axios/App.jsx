import React, { Component } from 'react'
import Style from '../src/css/style'
import classNames from 'classnames'
import axios from 'axios'
const base_url=require('./config').base_url
export default class App extends Component {
    state={
        stus:[],
        isLoading:false
    }
    Getrequest=()=>{
        axios.get(`${base_url}`)
        .then(res=>{
            let data=res.data.data
            this.setState({
                stus:data,
                isLoading:false
            })
        })
    }
  render() {
    let {stus,isLoading}=this.state
    let classes=classNames(Style.special,{[Style.isLoading]:isLoading})
    return (
      <div>请求数据
        <button onClick={this.Getrequest}>单击请求数据</button>
        <ul className={classes}>
            {stus.map(value=>{
               return <li key={value.id}>
                     学号:{value.id} 
                        姓名:{value.name} 
                        年龄:{value.age} 
                        性别:{value.sex} 
                </li>
            })}
        </ul>
      </div>
    )
  }
}
