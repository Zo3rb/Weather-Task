import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, WeatherPage, HelpPage, NotFound } from '../pages';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/weather" component={WeatherPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact component={NotFound} />
        </Switch>
    );
}

export default AppRouter;
