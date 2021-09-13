import React from 'react';
import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
      Hello world! Starting React..
      <Student name={Umaima}/>
      <hr/>
      <Student name={Hafsah}/>
      <hr/>
      <Student name={Ayesha}/>
    </div>
  );
}

export default App;
