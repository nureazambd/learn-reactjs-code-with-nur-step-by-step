import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(){
    super();
    console.log("console constructor");
  }
  render()
  {
    console.log("console render");
    return (
      
      <div className="App">
        
       <h>Hello React</h>
      </div>
    );
  }
}

export default App;
