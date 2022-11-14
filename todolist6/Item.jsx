import React, { Component } from 'react'
export default class Item extends Component {
  state={
    isediting:false
  }
  myref=React.createRef()
  setTodo=(content)=>{
    this.setState({isediting:true},()=>this.myref.current.focus())
    this.myref.current.value=content
  }
 
  render() {
    let {todoList,deleteTodo,completeTodo,changeTodo}=this.props
    let completed=todoList.bool?'completed':''
    let classes=this.state.isediting?completed+' editing':completed
    return (
      <li className={classes}>
        <div className='view'>
            <input typeof='checkbox' className='toggle' onClick={()=>completeTodo(todoList.id)}/>
            <label onDoubleClick={()=>this.setTodo(todoList.content)}>{todoList.content}</label>
            <button className='destroy' onClick={()=>deleteTodo(todoList.id)}></button>
        </div>
        <input type='text' className="edit" ref={this.myref}
          onBlur={this.state.isediting?(event)=>{
            changeTodo(event.target.value,todoList.id)
            this.setState({isediting:false})
          }:null}
          onKeyUp={(event)=>{
            if(event.key=='Enter'){
              changeTodo(event.target.value,todoList.id)
              this.setState({isediting:false})
            }
            if(event.key=='Escape'){
              this.setState({isediting:false})
            }
          }}
        >
        </input>
      </li>
    )
  }
}
