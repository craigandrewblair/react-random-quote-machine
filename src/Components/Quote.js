import React, { Component } from 'react';
import './Quote.css';

const quote = (props) => {

  const cssClassesFadeInOut = ['Quote', props.visible ? 'fadeIn' : 'fadeOut'];

    return (
      <div>
        <div className={cssClassesFadeInOut.join(' ')}>
          <div id="text">{props.quote[props.index]}</div>
          <div id="author">{props.author[props.index]}</div>
        </div>  
      </div>
    );
  }

export default quote;