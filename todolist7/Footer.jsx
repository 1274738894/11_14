import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong></strong>
          <span> item left</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/all" className="selected">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear Completed</button>
      </footer>
    )
  }
}
