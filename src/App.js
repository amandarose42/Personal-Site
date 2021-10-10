import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/work-experience" component={About}/>
          <Route exact path="/contact" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
