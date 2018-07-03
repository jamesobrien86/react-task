import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import PostList from './components/PostList';



import './styles/css/index.css';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/posts" component={PostList} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
