import React, { Component } from 'react'
import Classes from './Name.module.css'
class header extends Component {
  state = {
    count:0
  }
  btnclick = () => {
    this.setState((prevState,prevProps) => {
    return {count: prevState.count + 1}});
    
  }
  render ()
    {
    return (
    <div className = {Classes.blog}>
    <h4> this is the current level</h4>
    <p>hello</p>
    <hr></hr>
    <p> {this.state.count}</p>
    <button onClick={this.btnclick}> like </button>
    </div>
    );
  }
  
}

export default header