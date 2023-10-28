import React, { Component } from 'react'

export default class User extends Component {
    // constructor()
    // {
    //     super();
    //     this.state={
    //         name:"Salman",
    //         count:0
    //     }
    //     console.warn("constructor call")
    // }
    // componentDidMount()
    // {
    //     console.warn("componentDidMount call")
    // }
    // componentDidUpdate(preProps, preState, snapshot){
    //     console.warn("componentDidUpdate call",preState.count,this.state.count)
    //     if(this.state.count === 3){
    //         alert("State count is 3")
    //     }
    // }
    // shouldComponentUpdate(){
    //     console.warn("shouldComponentUpdate", this.state.count)
    //     if(this.state.count>=2 && this.state.count<5){
    //         return true
    //     }
        
    // }
    componentWillUnmount(){
        console.warn("componentWillUnmount called")
    }

    render() {
        console.warn("render call")
    return (
      <div>
        <h1>User component</h1>
        {/* <h1>User Component {this.state.count}</h1> */}
        {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Name</button> */}
      </div>
    )
  }
}
