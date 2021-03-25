import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home';
import Order from './pages/Order';
import Payment from './pages/Payment';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/order/:id' component={Order}/>
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/cart/payment' component={Payment}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
