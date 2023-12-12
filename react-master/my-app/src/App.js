import './App.css';
import Navbar from './navbar';
import Products from './products';
import Cart from './cart';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';

function App() {

  const [cartNum, setCartNum] = useState(0);
  const [products, setProducts] = useState(null);
  const [cartProducts, setCartProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/productsData.json'); // u odnosu na fajl index.html
        setProducts(response.data.items);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  const products2 = [
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

  const updateCart =  () => {
      const cartData = products.filter((p)=>{
        return p.amount > 0;
      })
      setCartProducts(cartData);
  };

  const addToCart = (id) => {
    products.map(
     (product) => {
      if(product.id === id){
        product.amount = product.amount + 1;
        setCartNum(cartNum + 1);
        console.log("id: ", product.id, " amount: ", product.amount);
        updateCart();
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
          <Cart cart={cartProducts} onAdd={addToCart}/>
        } />
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
