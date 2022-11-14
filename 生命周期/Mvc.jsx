import React, { Component } from 'react'

export default class Mvc extends Component {
    constructor(){
        super()
        this.state={
            text:''
        }
    }
    haddleonKeyup=(even)=>{
        this.setState({
            text:even.target.value
        })
    }
  render() {
    return (
      <div>
        <input type='text' onKeyUp={this.haddleonKeyup}></input>
        <p>{this.state.text}</p>
      </div>
    )
  }
}
