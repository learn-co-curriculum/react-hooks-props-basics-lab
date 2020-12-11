import React from 'react';

export default function ColorBox(props) {
  return (
    <div className="color-box" style={{ opacity: props.opacity }}>
      {props.opacity >= 0.2 ? <ColorBox opacity={props.opacity - 0.1} /> : null}
    </div>
  )
}

