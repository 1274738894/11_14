import React, { Component } from 'react'

export default class Children extends Component {
    constructor(){
        super()
        this.state={
            name:'tom'
        }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        console.log('getDerivedStateFromProps',nextProps.name);
        console.log('prevState',prevState);
        return {name:nextProps.name}
    }

  render() {
    console.log('render');
    let {name}=this.state
    return (
      <div>
        Children组件
        <button onClick={()=>{
            this.setState({
                name:''
            })
        }}>获取</button>
        <div>name:{name}</div>
      </div>
      
    )
  }
  componentDidMount(){
    console.log('componentDidMount');
   
  }

  shouldComponentUpdate(props,state){
    console.log('shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate');
    return this.state.name
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('conponentDidUpdate');
    console.log('snapshot',snapshot);
    console.log(prevProps,prevState);
  }

}
