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
      selected:null,
      selectAll:true
    }
  }
// 添加todo
  addTodo=(event)=>{
    if(event.key=='Enter'){
      let {todoList,todoNum}=this.state
      let todo={}
    todo.id=Date.now()
    todo.content=event.target.value
    todo.bool=false
    todoList.push(todo)
    todoNum++
    this.setState({
      todoList:todoList,
      todoNum:todoNum
    })
    event.target.value=''
    }
  }

  // 删除todo
  deleteTodo=(id)=>{
    console.log(id);
    let {todoList,todoNum}=this.state
    todoList=todoList.filter(value=>{
      if(value.id===id){
        todoNum--
        return false
      }
      return true
    })
    this.setState({todoList,todoNum})
  }

  //修改todo状态
  completeTodo=(id)=>{
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

  // 双击编辑todo
  setTodo=(todo,num)=>{
    let {todoList}=this.state
    todoList.map(value=>{
      if(value.id===todo.id){
        value.content=num
      }
    })
    this.setState({
      todoList:todoList
    })
    
  }

  // 筛选
  changeButton=(selected)=>{
    this.setState({selected})
  }

  // 删除所有已完成todo
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

  // 选择全部todo
  selectAllTodo=()=>{
    console.log('selectAll');
    let {todoList,selectAll,todoNum}=this.state
    console.log(selectAll);
    if(selectAll){
      todoList.map(value=>{
        value.bool=true
      })
      todoNum=0
    }else{
      todoList.map(value=>{
        value.bool=false
      }) 
      todoNum=todoList.length
    }
    this.setState({
      todoList:todoList,
      selectAll:!selectAll,
      todoNum:todoNum
    })
  }
  
  render() {
    let {todoList,todoNum,selected}=this.state
    let filterTodo=todoList.filter(value=>{
      switch(selected){
        case 'all':
          return true;
        case 'active':
          return !value.bool;
        case 'completed':
          return value.bool
        default:
          return true
      }
    })
    let item= filterTodo.map(value=>
      <Item key={value.id} todo={value} deleteTodo={this.deleteTodo}
      completeTodo={this.completeTodo} setTodo={this.setTodo}
      ></Item> 
      )

    return (
      <section className="todoapp">
            <header className="header">
              <h1>Todos</h1>
                <input type="text" className="new-todo" placeholder="What need to be done?"
                  onKeyUp={this.addTodo}
                />
            </header>
            <section className="main">
                 <input type="checkbox" className="toggle-all" id="toggle-all" />
                 <label htmlFor="toggle" onClick={this.selectAllTodo}></label>
                 <ul className="todo-list">
                  { 
                   item
                  }
                 </ul>
            </section>
            <Footer length={todoNum} changeButton={this.changeButton} clearTodo={this.clearTodo} selected={selected}/>
          </section>
    )
  }
}
