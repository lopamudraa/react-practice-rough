import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';

import classes from './Cockpit.css';
const cockpit = (props) => {

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('Cockpit.js useEffect');
        // setTimeout(()=>{
        //     alert('saved data to cloud');
        // },1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('Cockpit.js clean up work in useEffect')
        }
    }, []); //passing an empty array as an argument, to execute only on first time rendering

    useEffect(() => {
        console.log('Cockpit.js 2nd useEffect');
        return () => {
            console.log('Cockpit.js clean up work in 2nd useEffect')
        }
    })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <AuthContext.Consumer>
                {(context) =><button onClick={context.login}>Log in</button>}
            
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit); //It's a technique where React will memorize and basically store a snapshot of this component and only if its input changes, it will re-render