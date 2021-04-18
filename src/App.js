import React, { Component} from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person'

class App extends Component {
  state =  {
    persons:[
      {name:"Moe", age:44},
      {name:"Mario", age:32},
      {name:"essa", age:22},
    ],
    otherState: 'some other value',
    oAge: 23,
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render() {
    const style= {
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      'font-size': '15px',
      cursor: 'pointer'
    };
    let persons= null;
    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) =>{
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
            })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hello There</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.togglePersonsHandler()}>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hi, I\'m a react app!!!'));

  }
};

export default App;
