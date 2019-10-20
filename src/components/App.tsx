import React from "react";
import {HashRouter, Route, Switch, Link} from "react-router-dom";
import MainPage from "./MainPage";
import Catalog from "./Catalog";
import AccessControl from "./AccessControl";
import Test from "./Test";

const App = (): JSX.Element => (
    <HashRouter basename="/">
        <nav className="navigation__nav">
            <Link to="/">На главную</Link>
            <Link to="/catalog">Каталог приложений</Link>
            <AccessControl/>
        </nav>
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/catalog" exact component={Catalog}/>
        </Switch>
    </HashRouter>
);

export default App;
