import React, { Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

//import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
class App extends Component {
  constructor(props){
    super(props);
    console.log('[Apps.js] Construnctor');
  }
  state =  {
    persons:[
      {id:'dafc', name:"Moe", age:44},
      {id:'daff', name:"Mario", age:32},
      {id:'edfagf23', name:"essa", age:22},
    ],
    otherState: 'some other value',
    oAge: 23,
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state){
    console.log('app.js getDerivedStateFromProps: '+ props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

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
    console.log('[App.js] render');
    let persons= null;

    if(this.state.showPersons){
      persons = 
          <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>
      ;
    }
    
    return (
      <WithClass classes={classes.App}>
        <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
        {this.state.showCockpit?(
          <Cockpit 
          title= {this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length} 
          clicked={this.togglePersonsHandler}/>
        ):null}
        {persons}
      </WithClass>
    );
    //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hi, I\'m a react app!!!'));

  }
};

export default App;
