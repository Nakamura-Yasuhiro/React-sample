import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from "react-router-dom";

import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';

export default class App extends Component {
  render() {
    const current = { color: 'Red' };
    return (
      <Router>
        <div>
          <ul>
          <li><NavLink exact to="/" activeStyle={current}>トップ</NavLink></li>
          <li><NavLink to="/hello" activeStyle={current}>Hello</NavLink></li>
          <li><Link to="/article">公開記事</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={MyTop} />
            <Route path="/hello" component={MyHello} />
            <Route path="/article" component={MyArticle} />
          </Switch>
        </div>
      </Router>
    );
  }
}