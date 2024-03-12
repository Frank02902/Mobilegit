import React, { Component } from 'react';
import './App.css';
import Header from './Something'
import classes from './Name.module.css'
class App extends Component {
  state = {

    show: true,
  }
  btnclick = () => {
  let btnshow = !this.state.show;
   this.setState({show: btnshow});
   
 }
 
   
 
 render() {
   return (
    <div className="App">
    <button onClick = {this.btnclick}> hide </button>
    
    <br></br>
    {this.state.show? <Header />: null}
    <Header />
    <Header />
    </div>
  );
 }
};

export default App;
