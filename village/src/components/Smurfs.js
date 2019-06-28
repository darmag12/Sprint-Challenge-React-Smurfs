import React, { Component } from 'react';

import Smurf from './Smurf';
import { Route } from 'react-router-dom'
// import Logo from './img/Brainy_Smurf.png'

class Smurfs extends Component {
  render() {
    return (
      <div className="smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <div>
             <Route exact path='/smurf' render={ props => <Smurf
                {...props}
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                // img={Logo}
                key={smurf.id}
             />}/>
             </div>
            );
          })}
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
