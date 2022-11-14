import React, { Component } from 'react'
import '../src/css/index.css'
import Footer from './Footer'
import Item from './Item'
export default class App extends Component {
  state={
    todoList:[],
    todoLength:0,
    view:'all'
  }
  // 添加todo
  addTodo=(event)=>{
   if(event.key=='Enter'){
    let {todoList,todoLength}=this.state
    let newtodo={}
    newtodo.id=Date.now()
    newtodo.content=event.target.value
    newtodo.bool=false
    todoList.push(newtodo)
    todoLength++
    this.setState({todoList,todoLength})
    event.target.value=''
   }
  }

  // 删除todo
  deleteTodo=(id)=>{
    let {todoList,todoLength}=this.state
    todoList=todoList.filter(value=>{
      if(value.id==id){
        if(value.bool!=true){
          todoLength--
        }
        return false
      }
      return true
    })
    this.setState({todoList,todoLength})
  }
  // 点击已完成todo
  completeTodo=(id)=>{
    let {todoList,todoLength}=this.state
    todoList.map(value=>{
      if(value.id==id){
        if(value.bool){
          todoLength++
        }else{
          todoLength--
        }
        value.bool=!value.bool
      }
    })
    this.setState({todoList,todoLength})
  }

  // 编辑状态修改值
  changeTodo=(content,id)=>{
    let {todoList}=this.state
    todoList.map(value=>{
      if(value.id==id){
        value.content=content
      }
    })
    this.setState({todoList})
  }

  // 筛选
  selectTodo=(value)=>{
    this.setState({view:value})

  }
  clearTodo=()=>{
    let {todoList}=this.state
    todoList=todoList.filter(value=>{
      if(value.bool){
        return false
      }
      return true
    })
    this.setState({todoList})
  }

  render() {
    let {todoList,todoLength,view}=this.state
    todoList=todoList.filter(value=>{
      switch(view){
        case 'all':
          return true
        case 'active':
          return !value.bool
        case 'completed':
          return value.bool
        default:
          return true
      }
    })
    let item=todoList.map(value=>{
      return <Item key={value.id} todoList={value} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo} blurTodo={this.blurTodo}
      changeTodo={this.changeTodo}
      ></Item>
    })
    return (
      <section className="todoapp">
            <header className="header">
              <h1>Todos</h1>
                <input type="text" className="new-todo" placeholder="What need to be done?" onKeyUp={this.addTodo}/>
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
            <Footer todoLength={todoLength} selectTodo={this.selectTodo} view={view} clearTodo={this.clearTodo}/>
          </section>
    )
  }
}
