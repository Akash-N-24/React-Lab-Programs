import React from 'react';
import './App.css';
import Demo from './components/Demo';
import Exp1 from './components/Exp1';
import Exp2 from './components/Exp2';
import Exp3 from './components/Exp3';
import Exp4 from './components/Exp4'; 

function App() {
  return (
    <div className="App">
       <h1>My First React App</h1>
     <p>This is a simple React application.</p> 
      <Demo />
      <Exp1 />
      <Exp2 />  
      <Exp3 /> 
      <Exp4 />  
    </div>
  );
}

export default App; 