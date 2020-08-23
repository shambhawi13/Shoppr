import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ShopprProvider } from "./utils/GlobalState";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Welcome from "./pages/welcome/welcome"
import About from "./pages/About/About";
import Search from "./pages/Search/Search";
import Result from "./pages/Result/Result"
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import NoMatch from "./pages/NoMatch";
import Friends from "./pages/Friends/Friends";
import ResultsList from "./pages/ResultsList/ResultsList";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
         <ShopprProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/resultslist" component={ResultsList} />
            <Route component={NoMatch} />
          </Switch>
          </ShopprProvider>
      </div>
    </Router>
  );
}

export default App;
