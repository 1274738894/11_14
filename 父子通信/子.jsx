import React, { Component } from 'react'

export default class 子 extends Component {
  render() {
    return (
      <div>子-{this.props.name}
        <button onClick={()=>{
            this.props.getInfo('赵四')
        }}>单击</button>
      </div>
    )
  }
}
