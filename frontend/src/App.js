import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Game from './pages/Game';

function App() {
  return (
      <Router>
         <Switch>
            <Route exact path="/" component={Game} />
          </Switch>
      </Router>
  );
}

export default App;
