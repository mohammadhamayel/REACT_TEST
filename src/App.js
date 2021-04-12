import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello There</h1>
        <p>This is really working!</p>
        <Person name="ali" />
        <Person name="ali" > my habit is racing </Person>

      </div>
    );
    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hi, I\'m a react app!!!'));
  }
}

export default App;
