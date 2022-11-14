import React, { Component } from 'react'
import '../src/css/index.css'
import Footer from './Footer'
import Item from './Item'
export default class App extends Component {
 constructor(){
  super()
  this.state={
    todoList:[],
    todoNum:0,
    view:'all'
  }
 }
//  添加todo
 todoAdd=(event)=>{
  if(event.key==='Enter'){
    let {todoList,todoNum}=this.state
  let Todo={}
  Todo.id=Date.now()
  Todo.content=event.target.value
  Todo.bool=false
  todoList.push(Todo)
  todoNum++
  this.setState({
    todoList,todoNum
  })
  event.target.value=''
  }
 }

//  删除todo
todoDelete=(id)=>{
  let {todoList,todoNum}=this.state
  todoList=todoList.filter(value=>{
    if(value.id===id){
      if(!value.bool){
        todoNum--
      }
      return false
    }
    return true
  })
  this.setState({todoList,todoNum})
}

//  点击出现删除线
  todoComplete=(id)=>{
    let {todoList,todoNum}=this.state
    todoList.map(value=>{
      if(value.id==id){
        value.bool=!value.bool
        if(value.bool){
          todoNum--
        }else{
          todoNum++
        }
      }
    })
    this.setState({todoList,todoNum})
  }

  // 双击进入编辑修改todo
  todoSet=(id,refValue)=>{
    let {todoList}=this.state
    todoList.map(value=>{
      if(value.id===id){
        value.content=refValue
      }
    })
    this.setState({todoList})
    console.log('1111');
  }
  // 删除已完成todo
  deleteAll=()=>{
    console.log(222);
    let {todoList,todoNum}=this.state
    todoList=todoList.filter(value=>{
      if(value.bool){
        return false
      }
      return true
    })
    this.setState({todoList,todoNum})
  }
  selected=(view)=>{
    this.setState({view:view})
  }
  
  render() {
    let {todoList,todoNum,view}=this.state
    todoList=todoList.filter(num=>{
      switch(view){
        case 'all':
          return true;
        case 'active':
          return !num.bool
        case 'completed':
          return num.bool
      }
    })
    let item=todoList.map(value=>
      <Item key={value.id} todo={value} todoDelete={this.todoDelete} todoComplete={this.todoComplete} todoSet={this.todoSet}></Item>
    )
   
    return (
      <section className="todoapp">
            <header className="header">
              <h1>Todos</h1>
                <input type="text" className="new-todo" placeholder="What need to be done?" onKeyUp={this.todoAdd}/>
            </header>
            <section className="main">
                 <input type="checkbox" className="toggle-all" id="toggle-all" />
                 <label htmlFor="toggle"></label>
                 <ul className="todo-list">
                   {
                    item
                   }
                 </ul>
            </section>
            <Footer noCompleter={0} todoNum={todoNum} deleteAll={this.deleteAll} selected={this.selected} view={view}/>
          </section>
    )
  }
}
