import React, { Component } from 'react'
import $ from 'jquery'
import Style from '../src/css/style.css'
import '../moke/data' //开始拦截--联调前需要删除
export default class App extends Component {
    state={
        stus:[],
        isLoading:false  //loading状态管理
    }
    handdleClick=()=>{
        this.setState({stus:[],isLoading:true})
        $.ajax({
            url:'data.php',
            dataType:'json',
            success:(data)=>{
                console.log('this',this);
                this.setState({
                    isLoading:false,
                    stus:data.data
                })
            }
        })
    }
  render() {
    let {stus,isLoading}=this.state
    let classes=isLoading?`${Style.special} ${Style.isLoading}`:Style.special
    return (
      <div>
        <h3>App组件</h3>
        <button onClick={this.handdleClick}>获取数据</button>
        <ul className={classes}>
            {
                stus.map(value=>{
                    return(
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
