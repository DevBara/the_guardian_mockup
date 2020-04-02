import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      isLoading: true,
      data: [],
    }
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}
