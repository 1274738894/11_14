import React, { Component } from 'react'
import '../src/css/index.css'
import Footer from './Footer'
import Item from './Item'
export default class App extends Component {

  
  render() {
 
    return (
      <section className="todoapp">
            <header className="header">
              <h1>Todos</h1>
                <input type="text" className="new-todo" placeholder="What need to be done?"/>
            </header>
            <section className="main">
                 <input type="checkbox" className="toggle-all" id="toggle-all" />
                 <label htmlFor="toggle"></label>
                 <ul className="todo-list">
                 </ul>
            </section>
            <Footer noCompleter={0}/>
          </section>
    )
  }
}
