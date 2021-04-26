import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './pages/size.css';
import Helmet from 'react-helmet';
import logoShare from './assets/logo-share.png';

import Landing from './pages/Landing';
import Game from './pages/Game';

function App() {

    
    const url = "www.desinforma.me";
    const pageTitle = "desinforma.me"
    const shareTitle = "desinforma.me"
    const description="Desinforma.me é um jogo que pretende dar a conhecer o perigo das Fake News."; 
    const fbAppId="466073007840894"
    
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="theme-color" content="#008f68" />
                {/* Facebook */}
                <meta property="og:url" content={url} />
                <meta property="og:title" content={shareTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content="desinforma.me" />
                <meta property="og:image" content={logoShare} />
                <meta property="fb:app_id" content={fbAppId} /> 
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="pt_PT" />  

                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content={url} />
                <meta name="twitter:title" content={shareTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={logoShare} />
            </Helmet>   
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/game" component={Game} />
                    <Route exact path="/howtoplay" component={Game} />
                    <Route exact path="/about" component={Game} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
