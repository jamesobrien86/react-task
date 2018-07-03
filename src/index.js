import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PostList from './components/PostList';
import PostSingle from './components/PostSingle';
import Header from './components/Header';



import './styles/css/main.css';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <Route match path="/" component={Header} />
      <Switch>
        <Redirect exact path="/" to="/posts" />
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/:postId" component={PostSingle} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
