import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='background'>
      <div className="div1">
      <p className='p-div1'>00</p>
      <p className='p-div1'>:</p>
      <p className='p-div1'>30</p>
      <p className='p-div1'>:</p>
      <p className='p-div1'>00</p>

      </div>
      <div className="div2">
        <p className='p-div2'>Hour</p>
        <p className='p-div2'>Minute</p>
        <p className='p-div2'>Second</p>
      </div>
    
      </div>
     );
  }
}
 
export default App;
