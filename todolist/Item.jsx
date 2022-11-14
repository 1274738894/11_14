import React, { Component } from 'react'

import classNames from 'classnames'
export default class Item extends Component {
  constructor(){
    super()
    this.state={
      settodo:false
    }
    this.myref=React.createRef()
  }
  look=(todo)=>{
    this.setState({settodo:true},()=>{
    this.myref.current.focus()
    this.myref.current.value=todo.content
    })
    
  }
  render() {
    let {todo,deleteTodo,completeTodo,setTodo}=this.props
    let completed=todo.bool?'completed':''
    let classs=this.state.settodo?completed+' editing':completed
    
    return (
      <li className={classs} onDoubleClick={()=>this.look(todo)}>
        <div className='view'>
            <input typeof='checkbox' className='toggle' onClick={()=>completeTodo(todo.id)}/>
            <label>{todo.content}</label>
            <button className='destroy' onClick={()=>deleteTodo(todo.id)}></button>
        </div>
       <input type='text' className="edit" ref={this.myref}
        onBlur={this.state.settodo?()=>{
          setTodo(todo,this.myref.current.value);this.setState({settodo:false})
        }:null}

        onKeyUp={(event)=>{
          if(event.key==='Enter'){
            setTodo(todo,this.myref.current.value)
            this.setState({settodo:false})
          }
          if(event.key==='Escape'){
             this.setState({settodo:false})
          }
        }}
       ></input>
      </li>
    )
  }
}
