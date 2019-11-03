import React from 'react';
import logo from './footprint50.png';
import hacktx from './1500x500.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Quiz</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Carbon Footprint Diary
        </p>
        <Link to="/users">Take the Quiz!!</Link>
      </header>
    </div>
  );
}
function About(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={hacktx} className="App-banner" alt="hacktx" />
        <p><b>
          Mission Statement
        </b></p>
        <body>
          Body statement with text
        </body>
      </header>
    </div>
  );
}
function Quiz(){
  return <h2>Quiz</h2>;
}