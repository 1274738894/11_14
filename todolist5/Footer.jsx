import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    let {todoNum,selectTodd,view,Cleartodo}=this.props
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong></strong>
          <span>{todoNum>1?todoNum+" items left":todoNum+" item left"}</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/all" className={view=='all'?'selected':''} onClick={()=>selectTodd('all')}>All</a>
          </li>
          <li>
            <a href="#/active" className={view=='active'?'selected':''} onClick={()=>selectTodd('active')}>Active</a>
          </li>
          <li>
            <a href="#/completed" className={view=='completed'?'selected':''} onClick={()=>selectTodd('completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={Cleartodo}>Clear Completed</button>
      </footer>
    )
  }
}
