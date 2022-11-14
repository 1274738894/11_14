import React, { Component } from 'react'
export default class Item extends Component {
  constructor(){
    super()
    this.state={
      isEdit:false
    }
    this.myref=React.createRef()
  }
  Double=(content)=>{
    console.log('222');
    this.setState({
      isEdit:!this.state.isEdit
    },()=> this.myref.current.focus())
    this.myref.current.value=content
  }
  render() {
    let {todo,todoDelete,todoComplete,todoSet}=this.props
    let completed=todo.bool?'completed':''
    let classs=this.state.isEdit?completed+' editing':completed
    return (
      <li className={classs}>
        <div className='view'>
            <input typeof='checkbox' className='toggle' onClick={()=>todoComplete(todo.id)}/>
            <label onDoubleClick={()=>this.Double(todo.content)}>{todo.content}</label>
            <button className='destroy' onClick={()=>todoDelete(todo.id)}></button>
        </div>
        <input type='text' className="edit" ref={this.myref} 
        onBlur={this.state.isEdit?()=>{
          todoSet(todo.id,this.myref.current.value)
          this.setState({isEdit:!this.state.isEdit})
        }:null}
        onKeyUp={(event)=>{
          if(event.key==='Enter'){
            todoSet(todo.id,this.myref.current.value)
            this.setState({isEdit:!this.state.isEdit})
          }
          if(event.key==='Escape'){
            this.setState({isEdit:!this.state.isEdit})
          }
        }}
        ></input>
      </li>
    )
  }
}
