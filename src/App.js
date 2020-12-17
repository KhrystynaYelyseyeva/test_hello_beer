import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home } from "./Home";
import Login from "./Login";
import './App.css';
import {AuthProvider} from "./Auth";
import {PrivateRoute} from "./PrivateRoute";

export const App = () => {
  return (
      <AuthProvider>
          <Router>
              <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
              </Switch>
          </Router>
      </AuthProvider>
  );
}
