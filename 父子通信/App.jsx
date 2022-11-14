import React, { Component } from 'react'
import Children from './Children'
export default class App extends Component {
constructor(){
    super()
    this.state={
        name:'tom'
    }
}
  render() {
    return (
      <div>
        App
       <p> {this.state.name}</p>
        <Children name={this.state.name}/>
    </div>
     
    )
  }
}
