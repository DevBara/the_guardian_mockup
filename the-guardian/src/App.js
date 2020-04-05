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
import Footer from './components/Footer'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
      <Router>
        <nav>
          <ul className="pages">
            <li> <Link to ="/News" className="pageText">News</Link></li>
            <li> <Link to ="/Opinion" className="pageText">Opinion</Link></li> 
            <li> <Link to ="/Sport" className="pageText">Sport</Link></li> 
            <li> <Link to ="/Culture" className="pageText">Culture</Link></li> 
            <li> <Link to ="/Lifestyle" className="pageText">Lifestyle</Link></li> 
          </ul>
        </nav>
        <Switch>
          <Route exact path ="/News" component ={News} />
          <Route exact path ="/Opinion" component ={Opinion} />
          <Route exact path ="/Sport" component ={Sport} />
          <Route exact path ="/Culture" component ={Culture} />
          <Route exact path ="/Lifestyle" component ={Lifestyle} />
        </Switch>
      </Router>
      <Main />
      <Footer />
      </div>
      
    )
  }
}


export default App