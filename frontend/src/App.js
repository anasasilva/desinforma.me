import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './pages/size.css';

import Landing from './pages/Landing';
import Game from './pages/Game';

function App() {
  return (
      <Router>
         <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/howtoplay" component={Game} />
            <Route exact path="/about" component={Game} />
          </Switch>
      </Router>
  );
}

export default App;
