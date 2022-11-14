import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.noCompleter}</strong>
          <span> item left</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/all" className={this.props.view=='all'?'selected':''} onClick={()=>this.props.allActive('all')
          }>All</a>
          </li>
          <li>
            <a href="#/active" className={this.props.view=='active'?'selected':''} onClick={()=>this.props.allActive('active')}>Active</a>
          </li>
          <li>
            <a href="#/completed" className={this.props.view=='completed'?'selected':''} onClick={()=>this.props.allActive('completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed"  onClick={this.props.clearTodo}>Clear Completed</button>
      </footer>
    )
  }
}
