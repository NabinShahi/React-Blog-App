import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PostBlog from './components/PostBlog';
import SignUp from './components/SignUp';
import Dashboard from './pages/Dashboard';
import DetailPage from './pages/DetailPage';
import Home from './pages/Home';
import ProtectedRoute from './utils/ProtectedRoute';

const Routes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/signup" exact={true}>
            <SignUp />
          </Route>
          <ProtectedRoute path="/post-blog" component={PostBlog} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/:slug" exact={true}>
            <DetailPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
