import React, { Component } from 'react';
import './Machine.css';
import Quote from './Quote';
import Social from './Social';
import Speech from '../Images/speech-bubble.png'
import axios from 'axios';

class Machine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      author: [],
      quote: [],
      index: 0,
      visible: true
    }
    this.getJSON = this.getJSON.bind(this);
    this.asyncCall = this.asyncCall.bind(this);
    this.parseJSONObjToLocalObj = this.parseJSONObjToLocalObj.bind(this);
    this.parseHTMLString = this.parseHTMLString.bind(this);
    this.displayRandomQuote = this.displayRandomQuote.bind(this);
  }

  getJSON(url) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          axios.get(url)
          .then( (response) => {
            return response.data;
          })
          .catch((e) => {
            console.log(e);
         })
        );
      }, 1000);
    });
  }
  
  async asyncCall() {
    console.log('Awaiting Response...');
    this.setState({
      result: await this.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=15&_json')
    });
    console.log(this.state.result);
  }

  parseJSONObjToLocalObj(obj){
    for(let i in obj){
      console.log(obj[i].title + ": " + obj[i].content);
      this.setState({
        author: this.state.author.concat(this.parseHTMLString(obj[i].title))
      });
      this.setState({
        quote: this.state.quote.concat(this.parseHTMLString(obj[i].content))
      });
    }
  }
  
  componentDidMount(){
    this.asyncCall().then(() => this.parseJSONObjToLocalObj(this.state.result));
  }

  parseHTMLString(str){
    let strippedText = str
    .replace(/<[^>]*>(\\s*<[^>]*>)*/gi, "")
    .replace(/&#8217;|&#8216;/gi, "\'")
    .replace(/&#8211;/gi, "-")
    .replace(/&#233;/gi, "é")
    .replace(/&#038;/gi, "&")
    .replace(/&#8230;/gi, "…")
    .replace(/&#8220;/gi, "\“")
    .replace(/&#8221;/gi, "\”");
    return strippedText;
  }

  displayRandomQuote(){
    this.props.randomRGB();
    let i = Math.floor(Math.random() * 10);
    this.setState({visible: false});
    setTimeout(() => {
      this.setState({visible: true, index: i});
    }, 1000);
  }

  render() {
    return (
      <div className='Machine'>
        <div id='machine-top'>
          <Quote author={this.state.author} quote={this.state.quote} index={this.state.index} visible={this.state.visible}/>
        </div>
        <div id='machine-bottom'>
          <Social author={this.state.author} quote={this.state.quote} index={this.state.index}/>
          <button id='new-quote' className='animated' onClick={this.displayRandomQuote} style={{backgroundColor: this.props.color}}><img id='new-btn-img' src={Speech} /></button>
        </div>
      </div>
    );
  }
}

export default Machine;