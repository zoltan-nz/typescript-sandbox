import React, { Component } from 'react';
import AgeCalculator from 'typescript-sandbox';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { birthday: '', age: null, error: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  calculateAge(value) {

    let ageCalculator;
    let age = null;
    let error = null;

    try {
      ageCalculator = new AgeCalculator(value);
      age = ageCalculator.age;
    } catch (e) {
      error = e.message;
    }

    return { age, error };
  }

  handleChange(event) {
    const birthday = event.target.value;
    const { age, error } =this.calculateAge(birthday);
    this.setState({ birthday, age, error });
  }

  render() {
    return (
      <div>
        <h1>Age Calculator</h1>
        <form>
          <label>
            Date of Birth: <input type="date" value={this.state.birthday} onChange={this.handleChange}/>
          </label>
        </form>
        <p>{this.state.error}</p>
        <p>
          Age: {this.state.age}
        </p>
      </div>
    );
  }
}

export default App;
