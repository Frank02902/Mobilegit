import React, { Component } from 'react'
import Classes from './Name.module.css'
class header extends Component {
  state = {
    like:0,
    click: false
  }
  btnclick = () => {
    this.setState((prevState,prevProps) => {
    return {like: (prevState.like + 1)%2}});
    this.setState((prevState, prevProps)=> {
      return {click: !prevState.click}
    })
  }
  render ()
    {
    return (
    <div className = {Classes.blog}>
    <h4> this is the current level</h4>
    <p>hello</p>
    <hr></hr>
    <p> {this.state.like}</p>
    <button onClick={this.btnclick} style = {{backgroundColor: this.state.click? 'blue' : 'white',
      color: this.state.click? 'white': 'blue'
    }}> {this.state.click? "unlike": "like"}</button>
    </div>
    );
  }
  
}

export default header