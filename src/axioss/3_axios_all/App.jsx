import React, { Component } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import '../0Moke/all'
import '../0Moke/all2'
import Style from '@/css/style'
export default class App extends Component {
    state={
        all:[],
        all2:[],
        isLoading:false
    }
    handleClick=()=>{
        this.setState({
            isLoading:true
        })
        axios.all([
            axios.get('all.js'),
            axios.get('data.js')
        ])
        .then(axios.spread((res1,res2)=>{
            console.log(res1.data.data);
           this.setState({
            all:res1.data.data,
            all2:res2.data.data,
            isLoading:false
           })
        }))
    }
  render() {
    let {all,all2,isLoading}=this.state
    let classes=isLoading?classNames(Style.special,Style.loading):classNames(Style.special)
    return (
      <div>请求多个数据all
        <button onClick={this.handleClick}>点击请求</button>
        <ul className={classes}>
            {
                all.map(value=>{
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
                all2.map(value=>{
                  return  <li key={value.prodId}>
                        {value.prodName}
                        {value.price}
                    </li>
                })
            }
        </ul>
      </div>
    )
  }
}
