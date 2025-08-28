import './App.scss';

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ShopNowPage from './pages/ShopNowPage';
import Header from './components/Header/Header';

export default ({ history }) => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/shopnow" component={ShopNowPage} />
                    <Route path="/" exact component={LandingPage} />
                </Switch>
            </Router>
        </div>
    );
};