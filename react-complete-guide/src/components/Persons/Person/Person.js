import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Hoc'
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[person.js] Inside constructor', props);
   }

   componentWillMount() {
     console.log('[person.js] inside componentwillmount');
   }

   componentDidMount() {
     console.log('[person.js] inside componentDidMount');
     this.inputElement.focus();
   }
  render () {
    console.log("[Person.js] Inside render()");
    return (
      <Aux>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => {this.inputElement = inp}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
