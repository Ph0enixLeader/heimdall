import React from 'react';

function InputTxt(props) {
    return <input className="cyberpunk" onChange={props.action} type="text" name={props.name} placeholder={props.name}></input>;
  }

  export default InputTxt;