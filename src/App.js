import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Launch from './pages/Launch';
import Location from './pages/Location';
import Order from './pages/Order';
import Payment from './pages/Payment';
import Receipts from './pages/Receipts';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route exact path='/' component={Launch}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/location' component={Location}/>
      <Route exact path='/order/:id' component={Order}/>
      <Route exact path='/cart' component={Cart}/>
      <Route exact name='payment' path='/cart/payment' component={Payment}/>
      <Route exact path='/receipts' component={Receipts}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
