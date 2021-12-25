import React from 'react';

function Cyberdropdow(props) {
  return <button className="cybr-dropdown" onClick={props.action}>
              {props.name}<span>_</span>
              <span className="cybr-dropdown__glitch">{props.name}</span>
              <span className="cybr-dropdown__tag">{props.tags}</span>
          </button>;
}

  export default Cyberdropdow;