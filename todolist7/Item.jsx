import React, { Component } from 'react'

import classNames from 'classnames'
export default class Item extends Component {
  render() {
    let {todo}=this.props
    return (
      <li >
        <div className='view'>
            <input typeof='checkbox' className='toggle' />
            <label></label>
            <button className='destroy' ></button>
        </div>
        <input type='text' className="edit"></input>
      </li>
    )
  }
}
