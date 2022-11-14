import React, { Component } from 'react'
import Style from '@/css/style'
import axios from 'axios'
import classNames from 'classnames'
import '../0Moke/all'
import '../0Moke/all2'
export default class l拦截器 extends Component {
    state={
        data:[],
        data2:[],
        isLoading:false
    }
    handelClick=()=>{
        axios.all([
            axios.get('all.js'),
            axios.get('data.js')
        ])
        .then(axios.spread((res1,res2)=>{
            this.setState({
                data:res1.data.data,
                data2:res2.data.data
            })
        }))
    }
  render() {
    let {data,data2,isLoading}=this.state
    let classes=isLoading?classNames(Style.special,Style.loading):classNames(Style.special)
    return (
      <div>拦截器
        <button onClick={this.handelClick}>请求数据</button>
        <ul className={classes}>
            {
                data.map(value=>{
                  return  <li key={value.id}>
                  {value.name}
                  {value.age}
                  {value.sex}
              </li>
                })
            }
        </ul>
        <ul className={classes}>
            {
            data2.map(value=>{
                return <li key={value.prodId}>
                {value.prodName}
                {value.price}
            </li>
            })
            } 
        </ul>
        <ul>

        </ul>
      </div>
    )
  }
  componentDidMount(){
    axios.interceptors.request.use(config=>{
        console.log("发送请求前调用了request请求拦截器函数",config);
        this.setState({
            isLoading:true
        })
        return config;
    })
    axios.interceptors.response.use(res=>{
        console.log("接受服务器响应信息前调用了响应拦截器函数",res);
        this.setState({
            isLoading:false
        })
        return res
    })
  }
}
