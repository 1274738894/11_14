import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    let {todoLength,selectTodo,view,clearTodo}=this.props
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong></strong>
          <span>{todoLength} item left</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/all" className={view=='all'?'selected':''} onClick={()=>selectTodo('all')}>All</a>
          </li>
          <li>
            <a href="#/active" className={view=='active'?'selected':''} onClick={()=>selectTodo('active')}>Active</a>
          </li>
          <li>
            <a href="#/completed"className={view=='completed'?'selected':''} onClick={()=>selectTodo('completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearTodo}>Clear Completed</button>
      </footer>
    )
  }
}
