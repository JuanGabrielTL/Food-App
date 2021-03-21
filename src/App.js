import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Order from './pages/Order';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/order/:id' component={Order}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
