import React, { Component } from 'react';
import './App.css';
import Header from './Something'
import classes from './Name.module.css'
class App extends Component {
  state = {
    action: "hide",
    show: true,
  }
  btnclick = () => {
  //let btnshow = !this.state.show;
   this.setState((prevState, prevProps) => {
     return {show: !prevState.show}
   });
   this.state.show ? this.setState({action: "show"}) : this.setState({action: "hide"})
 }
 
   
 
 render() {
   return (
    <div className="App">
    <button onClick = {this.btnclick}> {this.state.action}</button>
    
    <br></br>
    {this.state.show? <Header />: null}
    <Header />
    <Header />
    <br></br>
    <h4 className= {classes.blog}> hello </h4>
    </div>
  );
 }
};

export default App;
