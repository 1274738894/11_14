import React, { Component } from 'react'
import '../src/css/index.css'
import Footer from './Footer'
import Item from './Item'
export default class App extends Component {
   constructor(){
    super()
    this.state={
      todoDate:[],
      todoNum:0,
      select:true,
      view:'all'

    }
   }

   addTodo=(event)=>{
    if(event.key!='Enter') return false
    let {todoDate}=this.state
    todoDate.push({id:Date.now(),title:event.target.value.trim(),hanConpleted:false})
    this.setState({
      todeDate:todoDate
    })
    event.target.value=''
    this.state.todoNum++
   }

   delTodo=(id)=>{
    let {todoDate}=this.state
    let todoNum=this.state.todoNum
    let newDate=todoDate.filter(value=>{
      if(value.id===id){
        if(!value.hanConpleted){
          todoNum--
        }
          return false
      }
      return true
    })
    this.setState({
      todoDate:newDate,
      todoNum:todoNum
    })
   }

   hanConpleted=(id)=>{
    let {todoDate}=this.state
    let todoNum=this.state.todoNum
    todoDate.map(value=>{
      if(value.id===id){
        value.hanConpleted=!value.hanConpleted
        if(value.hanConpleted){
          todoNum--
        }else{
          todoNum++
        }
      }

    })
    this.setState({
      todoDate:todoDate,
      todoNum:todoNum
    })
   }

   isEditOnChange=(domvalue,id)=>{
    let {todoDate}=this.state
    todoDate.map(value=>{
      if(value.id==id){
          value.title=domvalue
      }
      this.setState({
        todoDate:todoDate
      })
    })
   }

   clearTodo=()=>{
    console.log('clearTodo');
    let {todoDate}=this.state
    todoDate=todoDate.filter(value=>{
      if(value.hanConpleted){
        return false
      }
      return true
    })
    this.setState({
      todoDate:todoDate
    })
   }

   selectAllTodo=()=>{
    // let {select,todoDate,todoNum}=this.state
    // select=!select
    // if(select){
    //   todoDate.map(value=>{
    //     value.hanConpleted=true
    //     todoNum=0
    //   })
    // }else{
    //   todoDate.map(value=>{
    //     value.hanConpleted=false
    //   })
    //   todoNum=todoDate.length
    // }
    // this.setState({
    //   todoDate:todoDate,
    //   select:select,
    //   todoNum:todoNum
    // })
    let {todoDate,select,todoNum}=this.state
    for(let key in todoDate){
      todoDate[key].hanConpleted=select
    }
    if(select){
      todoNum=0
    }else{
      todoNum=todoDate.length
    }
    this.setState({
      todoDate,
      select:!select,
      todoNum
    })
   }
   allActive=(view)=>{
    this.setState({view});
   }
   
  render() {
    let {todoDate,view}=this.state
    let filterTodoDatas=todoDate.filter(value=>{
      switch (view){
          case 'all':
              return true;
          case 'active':
              return !value.hanConpleted;
          case 'completed':
              return value.hanConpleted;
      
      }
  })
  console.log(filterTodoDatas);
  let items=filterTodoDatas.map(value=>
    <Item todo={value} key={value.id} delTodo={this.delTodo}
          hanConpleted={this.hanConpleted}  isEditOnChange={this.isEditOnChange}
       ></Item>
    
)
    return (
      <section className="todoapp">
            <header className="header">
              <h1>Todos</h1>
                <input type="text" onKeyUp={this.addTodo} className="new-todo" placeholder="What need to be done?"/>
            </header>
            <section className="main">
                 <input type="checkbox" className="toggle-all" id="toggle-all" />
                 <label htmlFor="toggle" onClick={this.selectAllTodo}></label>
                 <ul className="todo-list">
                  {
                    items
                  }
                 </ul>
            </section>
            {
             <Footer noCompleter={this.state.todoNum} clearTodo={this.clearTodo} view={this.state.view} allActive={this.allActive}/>
            }
          </section>
    )
  }

}
