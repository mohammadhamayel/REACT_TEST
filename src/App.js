import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state =  {
    persons:[
      {id:'dafc', name:"Moe", age:44},
      {id:'daff', name:"Mario", age:32},
      {id:'edfagf23', name:"essa", age:22},
    ],
    otherState: 'some other value',
    oAge: 23,
    showPersons: false,
  };

  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

   const person = {...this.state.persons[personIndex]};
   //const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render() {
    const style= {
      backgroundColor:'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      fontSize: '15px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'darkblue'
      }
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
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })}
        </div> 
      );
      style.backgroundColor= 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color:'yellow'
      };
    }
    const classes =[];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hello There</h1>
        <p className={classes.join('  ')}>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.togglePersonsHandler()}>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hi, I\'m a react app!!!'));

  }
};

export default Radium(App);
