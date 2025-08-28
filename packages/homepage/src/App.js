import './App.scss';

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ShipNowPage from './pages/ShipNowPage';

export default ({ history }) => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/shipnow" component={ShipNowPage} />
                    <Route path="/" exact component={LandingPage} />
                </Switch>
            </Router>
        </div>
    );
};