import React, { Children, Component } from 'react'
import Children2 from './Children2'

export default class Parent2 extends Component {
    state={
        x:"100"
    }
  render() {
    return (
      <div>
        <Children2 x={this.state.x}/>
      </div>
    )
  }
}
