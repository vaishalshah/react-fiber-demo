import React from 'react';
import './Bubble.css';

export default function Bubble(props) {
  return (
    <div>
      <div
        className="bubble"
        style={{ position: 'absolute', left: props.x, top: props.y }}
      >
        {props.text}
      </div>
      {props.children}
    </div>
  );
}
