import React, { Component } from 'react'

export default class User extends Component {
    constructor()
    {
        super();
        this.state={
            name:"Salman"
        }
        console.warn("constructor call")
    }
    componentDidMount()
    {
        console.warn("componentDidMount call")
    }

    render() {
        console.warn("render call")
    return (
      <div>
        <h1>User Component {this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"Shuvro"})}}>Update Name</button>
      </div>
    )
  }
}
