import React from 'react';

function InputEmail(props) {
    return <input className="cyberpunk" onChange={props.action} type="email" name={props.name} placeholder={props.name}/>;
  }

export default InputEmail;