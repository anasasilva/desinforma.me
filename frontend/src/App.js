import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styling/App.css';
import './styling/size.css';
import Helmet from 'react-helmet';

import Landing from './pages/Landing';
import Game from './pages/Game';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';
import Sobre from './pages/Sobre';
import ComoJogar from './pages/ComoJogar';
import EndGame from './pages/EndGame';
import GameWrapper from './GameWrapper';

function App() {
    return (
        <Router>
            <Helmet>
                <title>Desinforma.me | O jogo das Fake News</title>
            </Helmet>
            <GameWrapper>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/jogo" component={Game} />
                        <Route exact path="/fim-jogo" component={EndGame} />
                        <Route exact path="/como-jogar" component={ComoJogar} />
                        <Route exact path="/sobre" component={Sobre} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </GameWrapper>
        </Router>
    );
}

export default App;
