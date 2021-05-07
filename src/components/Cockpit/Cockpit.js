import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert('saved data to cloud');
      }, 1000);
      return () =>{
        console.log('[Cockpit.js] useEffect-clean up'); // runs for the last time when useEffect rendered and this depends on second arrgs the determine when this code run
      }
    }, []); // when i put props.persons it appears when the person change and when run for the first time, and if its just empty it will run by default just for the first time 

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () =>{
        console.log('[Cockpit.js] useEffect-clean up'); // runs for the last time when useEffect rendered and this depends on second
      }
    }); // this will run every Update cycle cause there is no arrgs 
    const assignClasses =[];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }

    if(props.personsLength <=2){
      assignClasses.push(classes.red);
    }
    if(props.personsLength <=1){
      assignClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join('  ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}> Switch Name
            </button>
        </div>
    );
};

export default React.memo(cockpit);// React.memo just rendering the changes that happens here in Cockpit.js