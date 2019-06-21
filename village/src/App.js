import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { get } from 'http';
import axios from 'axios'
import { Route } from 'react-router-dom'
import  Navigation  from './components/Navigation';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount(){
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>{
      console.log(res)
      this.setState({
        smurfs: res.data
      })
    })
    .catch(error => {
      console.log('Fetch Error: ', error)
  })
  }

  addSmurf = (event, smurf) =>{
    event.preventDefault()
    axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res =>{
      this.setState({
        smurfs: res.data
      })
      this.props.history.push('/smurfs')
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>Smurf Village</h1>
        <Route exact path='/smurf-form' render={props => <SmurfForm {...props} addSmurf={this.addSmurf}/>} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
