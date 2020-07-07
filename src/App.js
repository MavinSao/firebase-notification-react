import React from 'react';
import logo from './logo.svg';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification'

function App() {

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="icon" width="50%" />
      <h1 className="App-title">Welcome to Firebase notifications</h1>
      <button onClick={askForPermissioToReceiveNotifications} >
        Get User Token
</button>
    </div>
  );
}

export default App;
