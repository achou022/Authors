import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Favoirte Author</h3>
        <Main/>
      </div>
    </div>
  );
}

export default App;
