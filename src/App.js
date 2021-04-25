import React, { useState } from 'react';
import Login from './components/cred/login';
import Signup from './components/cred/signup';
import Home from './components/pages/home/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path='/' exact render={() => <h1>Home page is not yet made.</h1>} />
      <Route path='/login' render={() => <Login />} />
      <Route path='/signup' render={() => <Signup />} />
      <Route path='/home' render={() => <Home />} />
    </>
  );
}

export default App;
