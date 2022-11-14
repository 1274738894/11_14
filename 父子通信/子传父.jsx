import React, { Component } from 'react'
import  Children from './子'
export default class 子传父 extends Component {
    state={
        name:'tom'
    }
    getInfo=(name)=>{
        this.setState({
            name:name
        })
    }
  render() {
    return (
      <div>子传父-{this.state.name}
        <Children name={this.state.name} getInfo={this.getInfo}></Children>
      </div>
    )
  }
}
