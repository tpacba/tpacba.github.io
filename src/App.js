import React from 'react';
import GameArea from './components/GameArea';
import { HashRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Connect from './pages/Connect';
import Navbar from './components/Navbar'


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={GameArea} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/connect" component={Connect} />
          <center><Navbar></Navbar></center>
        </Wrapper>
      </div>
    </Router>
  )
}

export default App;
