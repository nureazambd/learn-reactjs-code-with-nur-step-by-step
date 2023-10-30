import React, { Component, createRef } from 'react'

class User extends Component {
  constructor(){
    super();
    this.inputRefName = createRef();
    this.inputRefEmail = createRef();
    this.inputRefPass = createRef();
    this.buttonRef = createRef();
  }
  componentDidMount(){
    console.log(this.inputRefName.current.value='Salman')
  }
  getRef(){
    console.log(this.inputRefName.current.value='Amir')
    this.inputRefName.current.style.color='white'
    this.inputRefName.current.style.background='black'
    console.log(this.inputRefEmail.current.value='amir@gmail.com')
    this.inputRefEmail.current.style.color='black'
    this.inputRefEmail.current.style.background='yellow'
    console.log(this.inputRefPass.current.value='123456789')
    this.inputRefPass.current.style.color='white'
    this.inputRefPass.current.style.background='green'
    this.buttonRef.current.style.color='white'
    this.buttonRef.current.style.background='green'
  }
  render() {
    return (
      <div>
        <h1>User</h1>
        <input type='text' placeholder='Name' ref={this.inputRefName}/><br/><br/>
        <input type='text' placeholder='email' ref={this.inputRefEmail}/><br/><br/>
        <input type='password' placeholder='Password' ref={this.inputRefPass}/><br/><br/>
        <button onClick={()=>this.getRef()} ref={this.buttonRef}>Click</button>

      </div>
    )
  }
}

export default User;