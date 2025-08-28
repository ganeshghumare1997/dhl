import React, { lazy, Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import Progress from './components/Progress';

const HomepageLazy = lazy(() => import('./components/HomepageApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/" component={HomepageLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
};
