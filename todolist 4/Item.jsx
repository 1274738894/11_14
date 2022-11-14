import React, { Component } from 'react'


export default class Item extends Component {
  state={
    editing:false
  }
  myref=React.createRef()
  Setcontent=(content)=>{
    this.setState({
      editing:!this.state.editing
    },()=>{
      this.myref.current.focus()
      this.myref.current.value=content
    })

  }
 
  render() {
    let {todo,Deletetodo,Completetodo,Changetodo,KeyChangetodo}=this.props
    let completed=todo.bool?'completed':''
    let classs=this.state.editing?completed+' editing':completed
    return (
      <li className={classs}>
        <div className='view'>
            <input typeof='checkbox' className='toggle' onClick={()=>Completetodo(todo.id)}/>
            <label onDoubleClick={()=>this.Setcontent(todo.content)}>{todo.content}</label>
            <button className='destroy' onClick={()=>Deletetodo(todo.id)}></button>
        </div>
        <input type='text' className="edit" ref={this.myref}
          onBlur={this.state.editing?(event)=>{Changetodo(todo.id,event.target.value),this.setState({editing:!this.state.editing})}:null}
          onKeyUp={(event)=>{
            if(event.key=='Enter'){
              KeyChangetodo(todo.id,event.target.value)
              this.setState({editing:!this.state.editing})
            }
            if(event.key=='Escape'){
              this.setState({editing:!this.state.editing})
            }
          }}
        ></input>
      </li>
    )
  }
}
