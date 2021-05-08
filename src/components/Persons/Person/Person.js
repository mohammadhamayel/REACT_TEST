import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;/// this context use in class-base component

    componentDidMount(){
        //this.inputElement.focus(); used for method 1
        this.inputElementRef.current.focus();
        console.log('[Person.js] authenticated : '+this.context.authenticated);
    }
    render(){
        console.log('[Person.js] rendering ...')
        return (
        <Aux >
            { this.context.authenticated ? <p>Authenticated!</p>: <p>Please Log in</p>}                {/* {this.props.isAuth? <p>Authenticated</p>: <p>Please log in</p>} used before  auth-context to implement authentication method */}
            <p onClick= {this.props.click} >
                I'm {this.props.name} and I am {this.props.age } years old!
            </p>
            <p>{this.props.children}</p>
            <input type="text" 
            key="i3"
            //ref={(inputEl) => {this.inputElement = inputEl}} passing ref throw this function method 1
            ref={this.inputElementRef}
            onChange= {this.props.changed} 
            value={this.props.name}/>
        </Aux>)
      ;
    }
}

Person.propTypes ={
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);