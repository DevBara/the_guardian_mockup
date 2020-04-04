import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import GuardianLogo from './components/GuardianLogo';


class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Main />
       
        
      </div>
    )
  }
}


export default App