import React, { Component } from 'react'
export default class Item extends Component {
  state={
    isediting:false
  }
  myref=React.createRef()
  Double=(value)=>{
    this.setState({isediting:!this.state.isediting
    },()=>this.myref.current.focus()) 
      this.myref.current.value=value
   
  }
  render() {
    let {todo,Deletetodo,Completedtodo,Settodo}=this.props
    let completed=todo.hasCompleted?'completed':''
    let classes=this.state.isediting?completed+' editing':completed
    return (
      <li className={classes}>
        <div className='view'>
            <input typeof='checkbox' className='toggle' onClick={()=>Completedtodo(todo.id)} />
            <label onDoubleClick={()=>this.Double(todo.content)}>{todo.content}</label>
            <button className='destroy' onClick={()=>Deletetodo(todo.id)}></button>
        </div>
        <input type='text' className="edit" ref={this.myref}
        onBlur={this.state.isediting?()=>{Settodo(todo.id,this.myref.current.value) ,
                this.setState({isediting:!this.state.isediting})}:null}
        onKeyUp={(event)=>{
          if(event.key=="Enter"){
            Settodo(todo.id,this.myref.current.value),
               this.setState({isediting:!this.state.isediting})
           }
           if(event.key=='Escape'){
            this.setState({isediting:!this.state.isediting})
          }
        }
       
          
        }
        ></input>
      </li>
    )
  }
}
