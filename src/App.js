import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
      <Nav />
      <main className="bg-black mb-auto">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route component={NoMatch} />
        </Switch>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
