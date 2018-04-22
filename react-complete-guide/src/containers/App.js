import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Hoc';
import withClass from '../hoc/withClass';

class App extends Component {
  constructor(props) {
   super(props);
   console.log('[App.js] Inside constructor', props);
   this.state = {
    persons: [
      { id: "asdasd", name: 'Andy', age: 28},
      { id: "qqweqwe", name: 'Max', age: 28},
      { id: "erterfsdf", name: 'Christina', age: 25},
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClicked: 0
  }
  }

  componentWillMount() {
    console.log('[App.js] inside componentwillmount')
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate',nextProps,nextState)
    return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
    }

  componentWillUpdate(nextProps,nextState) {
      console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState)
    }

  componentDidUpdate () {
      console.log('[UPDATE App.js] inside componentDidUpdate')
    }

  // state = {
  //   persons: [
  //     { id: "asdasd", name: 'Andy', age: 25},
  //     { id: "qqweqwe", name: 'Max', age: 28},
  //     { id: "erterfsdf", name: 'Christina', age: 25},
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1 }
    }
    )
  }

  render() {

    console.log("[App.js] inside render()")
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
    }

    return (
      <Aux>
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
      <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
