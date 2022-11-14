import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Children2 extends Component {
   
  render() {
    return (
      <div>
        <span>钱数-{this.props.x+100}</span>
      </div>
    )
  }
}
Children2.propTypes={
    x:PropTypes.number.isRequired
}
