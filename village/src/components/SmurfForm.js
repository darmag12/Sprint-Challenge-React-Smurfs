import React, { Component } from 'react';
import '../App.css'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.addSmurf(event, this.state)

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="smurf-form">
        <form onSubmit={this.handleSubmit}>
          <input
            className='input'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className='input'
            onChange={this.handleInputChange}
            placeholder="age"
            type='number'
            value={this.state.age}
            name="age"
          />
          <input
            className='input'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className='btn-add' onClick={this.handleSubmit} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
