import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { Route, withRouter } from 'react-router-dom'
import  Navigation  from './components/Navigation';
import Home from './components/Home'


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

      this.props.history.push('/smurf')
    })
    .catch(err => {
      console.log('Post err',err)
    })
  }
  render() {
    return (
      <div className="App">
        <h1 className='header'>Smurf Village</h1>
        <Navigation />
        <Route exact path='/' component={Home}/>
        <Route exact path='/smurf-form' render={props => <SmurfForm {...props} addSmurf={this.addSmurf}/>} />
       <Route path='/smurf' render={ props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;