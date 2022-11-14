import React, { Component } from 'react'

export default class Ref extends Component {
    constructor(){
        super()
        this.myInput=React.createRef()
    }
    haddleClick=()=>{
        console.log(this.myInput.current);
        console.log(this.myInput.current.value);
    }
  render() {
    return (
      <div>
        <button onClick={this.haddleClick}></button>
        <input type='text' ref={this.myInput}></input>
      </div>
    )
  }
}
