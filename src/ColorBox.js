import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>   //Note: The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string
        {/* your conditional code here! */}
      </div>
    )
  }

}

