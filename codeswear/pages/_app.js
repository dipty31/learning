import React, {useState, useEffect} from 'react';
import "@/styles/global.css";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }) {
  const [cart,setCart] = useState({});
  const [subTotal, setSubTotal ] = useState(0);

  useEffect(() => {
    console.log("hey I am a useEffect from _app.js");
    try{
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
      saveCart(JSON.parse(localStorage.getItem("cart")))

    } catch (error){
        console.error(error);
        localStorage.clear()
    }
  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for(let i=0; i<keys.length; i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;   
    }
    setSubTotal(subt);
  } 


  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] ={qty: 1, price, name, size, variant}
    }
    setCart(newCart);
    saveCart(newCart);
  }
const clearCart = () =>{
  setCart({}); //this is just a request, there's no guarantee of it happening immediately. js will take care of it in it's own time and way.
  saveCart({}); //hence giving empty object to saveCart, so that it doesn't save the old uupadated cart, in case of late updatation.
}

const removeFromCart = (itemCode, qty, price, name, size, variant) => {
  let newCart = cart;
  if(itemCode in cart){
    newCart[itemCode].qty = cart[itemCode].qty - qty;
  } if(newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
  }
  setCart(newCart);
  saveCart(newCart);
}

  return( <>
  <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
  );
}
