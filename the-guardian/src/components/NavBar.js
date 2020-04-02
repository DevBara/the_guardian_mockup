import React from 'react'
import {Route, Switch,Link, BrowserRouter as Router} from 'react-router-dom';

function NavBar() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to ="/Home">Home</Link> 
              </li>
              <li>
                <Link to ="/Category">Category</Link>
              </li>
              <li> 
                <Link to ="/Products">Products</Link>
              </li>
              <li> 
                <Link to ="/Login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Category" component={Category} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default NavBar