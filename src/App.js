import React, { Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
    let persons= null;
    let btnClass = [classes.Button];

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) =>{
              return <ErrorBoundary key={person.id}> 
                <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
            })}
        </div> 
      );
      btnClass.push(classes.Red)
    }
    const assignClasses =[];
    if(this.state.persons.length <=2){
      assignClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hello There</h1>
        <p className={assignClasses.join('  ')}>This is really working!</p>
        <button 
        className={btnClass.join(' ')}
        onClick={() => this.togglePersonsHandler()}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hi, I\'m a react app!!!'));

  }
};

export default App;
