import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Index from './pages/Index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index} />
            </Switch>
        </BrowserRouter>)
}

export default Routes;