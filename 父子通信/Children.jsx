import React, { Component } from 'react'

export default class Children extends Component {
  render() {
    return (
      <div>Children
        <p>{this.props.name}</p>
      </div>
    )
  }
}
