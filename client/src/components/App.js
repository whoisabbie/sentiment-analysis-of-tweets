import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './navbar/NavBar';
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Result from './Result';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/result" component={Result} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;