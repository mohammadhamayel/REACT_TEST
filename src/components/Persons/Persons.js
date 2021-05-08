import React, {PureComponent} from 'react';
//import { render } from 'react-dom';
import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
// these extra checks to be sure when rendering this component on which changes and this could happen which will case around 60% unnesseary checks for many components 
//so we can extend PureComponent class that that do all checks and just render the changes components
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate'); 
    //     if(nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== nextProps.clicked){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps,prveState, Snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(Snapshot);
    }

    componentWillUnmount(){ // you can use this how to run a code when the component removed
        console.log('[Persons.js] componentWillUnmount');
    }
    render(){
        console.log('[Persons.js] rendering...')
    
        return this.props.persons.map((person, index) => {
        return <Person
                click={() => this.props.clicked(index)}
                name= {person.name}
                age= {person.age}
                key= {person.id}
                changed={(event)=> this.props.changed(event,person.id)} 
                isAuth={this.props.isAuthenticated}
                />
                
        });
    }
    
};

export default Persons;