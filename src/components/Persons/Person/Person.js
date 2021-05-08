import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        //this.inputElement.focus(); used for method 1
        this.inputElementRef.current.focus();
    }
    render(){
        console.log('[Person.js] rendering ...')
        return (
        <Aux >
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