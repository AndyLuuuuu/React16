import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[persons.js] Inside constructor', props);
    }
 
    componentWillMount() {
     console.log('[persons.js] inside componentwillmount')
    }
 
    componentDidMount() {
     console.log('[persons.js] inside componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
     console.log("[UPDATE Persons.js] inside componentWillReceiveProps", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate',nextProps,nextState)
    return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked; 
    }

    componentWillUpdate(nextProps,nextState) {
      console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate () {
      console.log('[UPDATE Persons.js] inside componentDidUpdate')
    }


  render() {
    console.log("[Persons.js] Inside render()")
    return this.props.persons.map((person, index) => {
      return <Person 
      click={() => this.props.clicked(index)} 
      name={person.name} 
      age={person.age}
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)}/>
    })
  }
}

  export default Persons;