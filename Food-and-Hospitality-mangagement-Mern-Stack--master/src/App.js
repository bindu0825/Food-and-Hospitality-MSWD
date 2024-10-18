import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';

import AppC from './components/AppC';

import Login from './pages/components/Login'
import Register from './pages/components/Register'
import Profile from './pages/components/Profile/Profile.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/feedback" component={Contact} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/login" component = {Login}/>
          <Route exact path="/register" component = {Register}/>
          <Route exact path="/profile" component = {Profile}/>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route exact path="/crud" component={AppC} />
         
          
          
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
