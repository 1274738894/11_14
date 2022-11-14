import React, { Component } from 'react'
import  Children  from './Children'
import Mvc from './Mvc'
import Ref from './Ref'
export default class App extends Component {
  render() {
    return (
      <div>
        <div>App组件</div>
        <Children name='jarry'/>
        {/* <Ref/> */}
        {/* <Mvc/> */}
      </div>
    )
  }
}
