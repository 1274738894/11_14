import React, { Component } from 'react'
import classNames from 'classnames'
import '../src/css/style.css'
export default class classnames extends Component {
    constructor(){
        super()
        this.state={
            x:false,
            y:true
        }
    }
  render() {
    let {x,y}=this.state
    let className=classNames(['three',{two:x},{one:y}])
    return (
      <div>
        <div className={className}>知识改变命运</div>
      </div>
    )
  }
}
