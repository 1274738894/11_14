import React, { Component } from 'react'
export default class Item extends Component {
  constructor(){
    super()
    this.state={
      isEdit:false
    }
    this.myref=React.createRef()
  }
  changeInEdit=(todo)=>{
    console.log(todo);
    this.setState({
      isEdit:true
    },()=>{
      this.myref.current.focus() ,
      this.myref.current.value=todo.title 
    })
  }
  render() {
    let {todo,delTodo,hanConpleted,isEditOnChange}=this.props
    let completed=todo.hanConpleted?'completed':''
    let classs=this.state.isEdit?'editing '+completed:completed
    return (
      <li className={classs}>
        <div className='view'>
            <input typeof='checkbox' className='toggle'
              onClick={()=>hanConpleted(todo.id)}
              checked={todo.hasCompleted}
            />
            <label onDoubleClick={()=>this.changeInEdit(todo)}>{todo.title}</label>
            <button className='destroy' onClick={()=>delTodo(todo.id)}></button>
        </div>
        <input type='text' className="edit" ref={this.myref} 
               
               onBlur={this.state.isEdit?()=>{
                console.log('onblur');
                isEditOnChange(this.myref.current.value,todo.id)
                this.setState({
                  isEdit:false
                })}:null}
                
                onKeyUp={event=>{
                  if(event.key==='Enter'){
                    console.log('Enter');
                    isEditOnChange(this.myref.current.value,todo.id)
                    this.setState({isEdit:false})
                  }

                  if(event.key==='Escape'){
                    console.log('Esc');
                    this.setState({isEdit:false})
                  
                  }
                }}
                
                ></input>
      </li>
    )
  }
}
