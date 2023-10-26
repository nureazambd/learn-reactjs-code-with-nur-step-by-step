import React, { Component } from 'react'

export default class User extends Component {
  render() {
    console.log("user render method called",this.props)
    return (
      <div>
        <h1>User Component {this.props.name}</h1>
      </div>
    )
  }
}
