import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register}/>
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;