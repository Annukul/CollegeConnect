import React, { useState } from 'react';
import Login from './components/cred/login';
import Signup from './components/cred/signup';
import Home from './components/pages/home/home';
import Create from './components/pages/create/create';
import Profile from './components/pages/profile/my-profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path='/' exact render={() => <h1>Home page is not yet made.</h1>} />
      <Route path='/login' render={() => <Login />} />
      <Route path='/signup' render={() => <Signup />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/create' render={() => <Create />} />
      <Route path='/my-profile' render={() => <Profile />} />
    </>
  );
}

export default App;
