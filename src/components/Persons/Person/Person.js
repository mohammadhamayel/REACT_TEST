import React from 'react';
import classes from './Person.css'

const person=(props) => {
<<<<<<< HEAD:src/Person/Person.js

=======
    //const rnd = Math.random();
    // if(rnd > 0.7){
    //     throw new Error('Somethind went wrong');
    // }
>>>>>>> refs/remotes/origin/main:src/components/Persons/Person/Person.js
    return (
        <div className={classes.Person}>
            <p onClick= {props.click} >I'm {props.name} and I am {props.age } years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange= {props.changed} value={props.name}/>
        </div>

    )
}

export default person;