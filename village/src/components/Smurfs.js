import React, { Component } from 'react';

import Smurf from './Smurf';
import { Route } from 'react-router-dom'
// import Logo from './img/Brainy_Smurf.png'

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
             <Route exact path='/smurf' render={ props => <Smurf
                {...props}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                // img={Logo}
                key={smurf.id}
             />}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
