import React, { Component, PureComponent} from 'react'

function dataHendle(){
  this.setState({data:this.state.data+5})
}
class User extends PureComponent {
    
    constructor(){
      super();
      this.state={
        count:0,
        data:10
        
      }
    }

     dataHendle =()=>{
      this.setState({data:this.state.data*5})
    }
    render() {
      
      console.log('render call')
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Data: {this.state.data}</h1>

        <button onClick={()=>this.setState({count:1})}>Count+</button>
        {/* <button onClick={()=>this.setState({data:this.state.data*2})}>Data*</button> */}
        <button onClick={this.dataHendle}>Data*</button>


      </div>
    )
  }
}

export default User;