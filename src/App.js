import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state =  {
    persons:[
      {name:"Moe", age:44},
      {name:"Mario", age:32},
      {name:"essa", age:22},
    ],
    otherState: 'some other value',
    oAge: 23
  };
  switchNameHandler = (newName) =>{
    //console.log("was clicked!!!");
    this.setState({
      persons:[
        {name:"Mohammad", age:44},
        {name:newName, age:32},
        {name:"essa", age:33},
      ],
    });
  };

  nameChangedHandler = (event) =>{
    this.setState({
      persons:[
        {name:"Moe", age:44},
        {name:"Mario", age:32},
        {name:event.target.value, age:22},
      ],
    });
  }
  render() {
    const style= {
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      'font-size': '15px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hello There</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Sara')}>Switch Name</button>
        <Person name={this.state.persons[0].name } age= {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}/>
        <Person 
        name={this.state.persons[2].name} 
        age= {this.state.persons[2].age} 
        click={this.switchNameHandler.bind(this,'Ola')}
        changed={this.nameChangedHandler}
        > my habit is racing </Person>
        <Person name={this.state.otherState} age= {this.state.oAge} >just state </Person>
      </div>
    );
    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hi, I\'m a react app!!!'));

  }
};

export default App;
