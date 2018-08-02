import React, { Component } from 'react';
import './Social.css';
import TwitterLogo from '../Images/twitter.png';
import Tumblr from '../Images/tumblr.png';

const social = (props) => {

    return (
      <div className='Social'>
        <div id='tweet-div'>
          <a className='twitter-share-button' id="tweet-quote"
             href={'https://twitter.com/intent/tweet?text=' + props.quote[props.index] + ' By '+ props.author[props.index]}>
            <img src={TwitterLogo} id='twitter-logo' alt='Twitter logo'/>
          </a>
          <a className="tumblr-share-button" href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,craigandrewblair&caption='+ props.author[props.index]  +'&content=' + props.quote[props.index] +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}>
            <img src={Tumblr} id='tumblr-logo' alt='Tumblr logo'/>
          </a> 
        </div>
      </div>
    );
  }

export default social;