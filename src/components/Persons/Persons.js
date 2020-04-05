import React,{ PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
//     static getDerivedStateFromProps(props, state) {
//         console.log('[persons.js] getDerivedStateFromProps');
// return state;
//     }

// componentWillReceiveProps(props){
//     console.log('[Persons.js] componentWillReceiveProps',props);
// }
    // shouldComponentUpdate(nextProps, nextState){ //returns true or false according to continue or not
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked){
    //         return true;
    //       }
    //       else{
    //         return false;
    //   }

    // }
    getSnapshotBeforeUpdate(prevProps, prevState){ //executes before update the component, used to compere previous one with new one.
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot!'};
    }

    // componentWillUpdate(){

    // }
    
    componentDidUpdate(prevProps, prevState, snapshot){ //Executes after component rendering on UI
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){ //used before removing any component Example, after second time clicking on button, before hiding the persons block, it will execute
        console.log('[Persons.js] componentWillUnmount');
    }
    render(){
        console.log('[Persons.js] rendering.....');
        return this.props.persons.map((person, index) => {
            return (
                 <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} 
                isAuth={this.props.isAuthenticated}
                />
            );
        });
    }
    
};

export default Persons;