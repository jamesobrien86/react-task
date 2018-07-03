import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PostList from './components/PostList';
import PostSingle from './components/PostSingle';


import './styles/css/main.css';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <Switch>
      <Redirect exact path="/" to="/posts" />
      <Route exact path="/posts" component={PostList} />
      <Route exact path="/posts/:postId" component={PostSingle} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
