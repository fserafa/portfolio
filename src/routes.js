import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Index from './pages/Index';

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Index} />
            </Switch>
        </HashRouter>)
}

export default Routes;