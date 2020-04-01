import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hero from "./Hero"
import Services from "./Services"
import Industries from "./Industries"
import About from "./About"
import Contact from "./Contact"


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Hero} />
    <Route path="/Services" component={Services} />
    <Route path="/Industries" component={Industries} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
  </Switch>
);

export default Routes;