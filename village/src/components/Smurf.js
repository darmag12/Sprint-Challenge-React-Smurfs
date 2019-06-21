import React from 'react';
import '../App.css';

const Smurf = props => {
  const goToSmurf = (e, id)=> {
    e.preventDefault();
    props.history.push(`smurf/${id}`);
  }
  return (
    <div className="smurf" key={props.id} onClick={e => goToSmurf(e, props.id)}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  
  
};

export default Smurf;

