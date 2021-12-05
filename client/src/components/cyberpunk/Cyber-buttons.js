import React from 'react';

function Cyberbutton(props) {
    return <button className="cybr-btn" onClick={props.action}>
                {props.name}<span>_</span>
                <span className="cybr-btn__glitch">{props.name}</span>
                <span className="cybr-btn__tag">{props.tags}</span>
            </button>;
  }

  export default Cyberbutton;