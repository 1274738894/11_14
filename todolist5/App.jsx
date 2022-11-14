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
  // 添加
  Addtodo=(event)=>{
   if(event.key=='Enter'){
    let {todoList,todoNum}=this.state
    let newtodo={}
    newtodo.id=Date.now()
    newtodo.content=event.target.value
    newtodo.hasCompleted=false
    todoList.push(newtodo)
    todoNum++
    this.setState({
      todoList,todoNum
    })
    event.target.value=''
   }
  }
  // 删除
  Deletetodo=(id)=>{
    let {todoList,todoNum}=this.state
    todoList=todoList.filter(value=>{
      if(value.id===id){
        if(!value.hasCompleted){
          todoNum--
        }
        return false
      }
      return true
    })
    this.setState({
      todoList,todoNum
    })
  }
  // 已完成 未完成
  Completedtodo=(id)=>{
    let {todoList,todoNum}=this.state
    todoList.map(value=>{
      if(value.id==id){
        if(value.hasCompleted){
          todoNum++
        }else{
          todoNum--
        }
        value.hasCompleted=!value.hasCompleted
        
      }
      this.setState({todoList,todoNum})
    })
  }
  // 编辑
  Settodo=(id,data)=>{
    let {todoList}=this.state
    todoList.map(value=>{
      if(value.id==id){
        value.content=data
      }
    })
    this.setState({todoList})
  }
  // 筛选
  selectTodd=(view)=>{
    this.setState({view:view})
  }
  Cleartodo=()=>{
    let {todoList}=this.state
    todoList=todoList.filter(value=>{
      if(value.hasCompleted){
        return false
      }
      return true
    })
    this.setState({todoList})
  }
  render() {
    let {todoList,todoNum,view}=this.state
    todoList=todoList.filter(value=>{
      switch(view){
        case 'all':
          return true
        case 'active':
          return !value.hasCompleted
        case 'completed':
          return value.hasCompleted
        default :
          return true
      }
    })
    let item=todoList.map(value=>{
      return <Item key={value.id} todo={value} todoNum={todoNum} Deletetodo={this.Deletetodo} 
            Completedtodo={this.Completedtodo} Settodo={this.Settodo}></Item>
    })
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
            <Footer todoNum={todoNum} selectTodd={this.selectTodd} view={view}  Cleartodo={this.Cleartodo}/>
          </section>
    )
  }
}
