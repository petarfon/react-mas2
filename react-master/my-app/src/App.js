import './App.css';
import Navbar from './navbar';
import Products from './products';
import Cart from './cart';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  const [cartNum, setCartNum] = useState(0);

  const products = [
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ];

  const addToCart = (id) => {
    products.map(
     (product) => {
      if(product.id === id){
        product.amount = product.amount + 1;
        setCartNum(cartNum + 1);
        console.log("id: ", product.id, " amount: ", product.amount);
      }
      return true;
     }
    )   
  }


  return (
    <BrowserRouter className="App">
      <Navbar cartNum={cartNum}/>
      <Routes>
        <Route path="/" element={
          <Products allproducts={products} sometext="Ovo je neki tekst" onAdd={addToCart}/>
        } />
        <Route path='/cart' element={
          <Cart/>
        } />
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
