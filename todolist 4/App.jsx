import React, { Component } from 'react'
import '../src/css/index.css'
import Footer from './Footer'
import Item from './Item'
export default class App extends Component {
 state={
  todoList:[],
  todoNum:0,
  view:'all'
 }
//  添加
 Addtodo=(event)=>{
  if(event.key=='Enter'){
    let {todoList,todoNum}=this.state
  let newtodo={}
  newtodo.id=Date.now()
  newtodo.content=event.target.value
  newtodo.bool=false
  todoList.push(newtodo)
  todoNum++
  this.setState({todoList,todoNum})
  event.target.value=''
  }
 }
//  删除
 Deletetodo=(id)=>{
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

//  删除线
  Completetodo=(id)=>{
    let {todoList,todoNum}=this.state
    todoList.map(value=>{
      if(value.id===id){
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
  // 编辑
  Changetodo=(id,refvalue)=>{
    console.log(refvalue);
    let {todoList}=this.state
    todoList.map(value=>{
      if(value.id===id){
        value.content=refvalue
      }
    })
    this.setState({todoList})
  }
  KeyChangetodo=(id,refvalue)=>{
    let {todoList}=this.state
    todoList.map(value=>{
      if(value.id===id){
        value.content=refvalue
      }
    })
    this.setState({todoList})
  }
  // 删除所有已完成
  Cleartodo=()=>{
    let {todoList}=this.state
    todoList=todoList.filter(value=>{
      if(value.bool){
        return false
      }
      return true
    })
    this.setState({todoList})
  }
  // 筛选
  selectedButton=(str)=>{
    this.setState({view:str})
  }
  
  render() {
    let {todoList,todoNum,view}=this.state
    let filtertodo=todoList.filter(value=>{
      switch(view){
        case 'all':
          return true
        case 'active':
          return !value.bool
        case 'completed':
          return value.bool
      }
    })
    let item=filtertodo.map(value=>
      <Item key={value.id} todo={value} Deletetodo={this.Deletetodo} Completetodo={this.Completetodo}
      Changetodo={this.Changetodo}  KeyChangetodo={this.KeyChangetodo}
      ></Item>
      )
    return (
      <section className="todoapp">
            <header className="header">
              <h1>Todos</h1>
                <input type="text" className="new-todo" placeholder="What need to be done?" onKeyUp={()=>this.Addtodo(event)}/>
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
            <Footer selectedButton={this.selectedButton} Cleartodo={this.Cleartodo} view={view} todoNum={todoNum}/>
          </section>
    )
  }
}
