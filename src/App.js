import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
const App = props => {
  const [ personsState , setPersonsState] =  useState({
    persons:[
      {name:"Moe", age:44},
      {name:"Mario", age:32},
      {name:"essa", age:22},
    ],
    otherState: 'some other value',
    oAge: 23
  });
  const [otherState, setOtherState] = useState('some other value');
  const [oAge, setoAge] = useState(22);

  console.log(personsState,otherState,oAge);
  const switchNameHandler = () =>{
    //console.log("was clicked!!!");
    setPersonsState({
      persons:[
        {name:"Mohammad", age:44},
        {name:"Mario", age:32},
        {name:"essa", age:33},
      ],
    });
    setOtherState(" New State Value");
  };

  return (
    <div className="App">
      <h1>Hello There</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name } age= {personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age= {personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age= {personsState.persons[2].age} > my habit is racing </Person>
      <Person name={otherState} age= {oAge} >just state </Person>
    </div>
  );
  //return React.createElement('div',null, React.createElement('h1',{className: 'App'},'Hi, I\'m a react app!!!'));
};

export default App;
