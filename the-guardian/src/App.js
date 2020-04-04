import React, { Component } from 'react'
import './App.css';
import {Route, Switch,Link, BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main'
import News from './components/News'
import Opinion from './components/Opinion'
import Sport from './components/Sport'
import Culture from './components/Culture'
import Lifestyle from './components/Lifestyle'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Main />


      <Router>
        <nav>
          <ul>
            <li> <Link to ="/News">News</Link></li> 
            <li></li> 
            <li></li> 
            <li></li>
            <li></li> 
          </ul>
        </nav>
        <Switch>
          <Route exact path ="/News" component ={News} />
        </Switch>


        
      </Router>
      </div>
      
    )
  }
}


export default App