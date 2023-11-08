
import './App.css';
import { useEffect, useReducer, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { cartReducer, CartTypes, initialCartState } from './Reducer/cartReducer';
import all_product from './Components/Assets/all_product';

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  const addToCart = (itemId) => dispatch({ type: CartTypes.ADD, itemId });
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/smartdoorbell' element={<ShopCategory category="smartdoorbell" />}/>
            <Route path='/smartdoorlock' element={<ShopCategory category="smartdoorlock"  />}/>
            <Route path='/smartspeaker' element={<ShopCategory category="smartspeaker" />}/>
            <Route path='/smartlighting' element={<ShopCategory category="smartlighting" />}/>
            <Route path='/smartthermostat' element={<ShopCategory category="smartthermostat"/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
              </Route>
              <Route path='/cart' element={<Cart cart={cart} dispatch={dispatch} items={all_product}/>}/>
              <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
