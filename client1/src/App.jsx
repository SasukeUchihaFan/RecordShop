import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from "react";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";

import Success from "./pages/Success";
import { useSelector } from "react-redux";
  



  function App() {
    const user = false;
    return (
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
            
          
          <Route path="/products/:categories" element={ <ProductList />} />
          <Route path="/product/:id" element={ <Product />} />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/success" element={ <Success /> } />

          </Routes>
        
      </Router>
    );
  }



export default App;