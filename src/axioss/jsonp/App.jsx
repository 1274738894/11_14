import React, { Component } from 'react'
import axios from 'axios'
import Style from '@/css/style'
import classNames from 'classnames'
import jsonp from 'jsonp'
export default class App extends Component {
    state={
        stus:[],
        isLoading:false
    }
    handleClick=()=>{
        this.setState({
            stus:[],
            isLoading:true
        })
        jsonp("http://wz321.cp1j07.cnaaa3.com/data22.php",{
            paraxm:'callback'   //callback 存储jsonp函数名的变量
        },(error,res)=>{
            if(res){
                this.setState({
                    stus:res.data,
                    isLoading:false
                })
                console.log(res.data);
            }else{
                console.log('error',error);
            }
        })
    }
  render() {
    let {stus,isLoading}=this.state
    let clsses=isLoading?classNames(Style.special,Style.loading):classNames(Style.special)
    return (
      <div>
        跨域访问数据
        <button onClick={this.handleClick}>请求数据</button>
        <ul className={clsses}>
            {
            
                stus.map(value=>{
               
                   return (
                    <li key={value.id}>
                      学号:{value.id} 
                      姓名:{value.name} 
                      性别:{value.sex}
                      年龄:{value.age}
                    </li>
                   )
                   
                })
            }
        </ul>
      </div>
    )
  }
}
