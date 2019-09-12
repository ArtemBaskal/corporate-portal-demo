import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import MainPage from "./MainPage";
import Catalog from "./Catalog";
import AccessControl from "./AccessControl";

import history from "../history";

const App = () => (
  <Router history={history}>
    <nav className="navigation__nav">
      <Link to="/">На главную</Link>
      <Link to="/catalog">Каталог приложений</Link>
    </nav>
    <AccessControl />
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/catalog" exact component={Catalog} />
    </Switch>
  </Router>
);

export default App;
