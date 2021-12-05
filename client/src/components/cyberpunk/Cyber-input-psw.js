import React from 'react';

function InputPsw(props) {
    return <input className="cyberpunk" onChange={props.action} type="password" name={props.name} placeholder={props.name}></input>;
  }

  export default InputPsw;