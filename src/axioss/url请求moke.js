import React, { Component } from 'react'
import axios from 'axios'
import './0Moke/urlmoke'
export default class url请求moke extends Component {
    state={
        data:[]
    }
  render() {
    let {data}=this.state
    return (
      <div>url请求moke
        <ul>
            {
                data.map(value=>{
                    return <li key={value.id}>
                        姓名-{value.name}
                        年龄-{value.age}
                        性别-{value.sex}
                    </li>
                })
            }
        </ul>
      </div>
    )
  }
  componentDidMount(){
    console.log(123);
    let url=new URLSearchParams()
    url.append("name","吴老板")
    url.append("age",'18')
    axios({
        method:'post',
        url:'data.js',
        data:url
    }).then(res=>{
        this.setState({
            data:res.data.data
        })
    })
  }
}
