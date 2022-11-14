import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    let {length,changeButton,selected,clearTodo}=this.props
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong></strong>
          <span>{length>1?length+' items left':length+' item left'}</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/all" className={selected==='all'?'selected':''} onClick={()=>changeButton('all')}>All</a>
          </li>
          <li>
            <a href="#/active" className={selected==='active'?'selected':''} onClick={()=>changeButton('active')}>Active</a>
          </li>
          <li>
            <a href="#/completed"className={selected==='completed'?'selected':''} onClick={()=>changeButton('completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={clearTodo}>Clear Completed</button>
      </footer>
    )
  }
}
