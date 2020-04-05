import React, { Component } from 'react';
import classes from './Person.css';
import Auxilliary from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import propTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component{

    constructor(props)  {
        super(props);
        this.inputElementRef=React.createRef();
    }

 componentDidMount(){
   //  document.querySelector('input').focus();
  // this.inputElement.focus();
this.inputElementRef.current.focus();
 }

    render(){
        console.log('[Person.js] rendering....');
        return (
<Auxilliary>
<AuthContext.Consumer>
{(context)=> context.authenticated ?<p>Authenticated</p>:<p>Please Log in</p>}
</AuthContext.Consumer>
                <p key="i1" onClick={this.props.click}>I am {this.props.name} and {this.props.age} years old!</p>
                <p key="i2">{this.props.children}</p>
                <input 
                key="i3"
               // ref={(inputEL)=>{this.inputElement = inputEL}} 
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />

                </Auxilliary>
        );
    }
};

Person.propTypes = {
    click:propTypes.func,
    name:propTypes.string,
    age:propTypes.number,
    changed:propTypes.func
}
export default withClass(Person, classes.Person);