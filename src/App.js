// import logo from './logo.svg';
import { useState } from "react";
import './App.css';


const initialData = [{
  id: 1,
  price: 200,
  product: "rice",
  qty: 0
},

{
  id: 2,
  price: 200,
  product: "beans",
  qty: 0
}, 

{
  id: 3,
  price: 200,
  product: "vegetable",
  qty: 0
}, ]

function handleAddToCart(){
  return
}

function ListItems(){
 
  return <>
  <div>
  <h1>List of Items to Shop From</h1>
  {initialData.map(item=> <p key={item.id}>{item.product} {item.price} <span>Add to Cart</span></p>)}
 
  </div>
  </>
}

function Cart(){
  return <>
    <div>
      <h1>Cart</h1>

    </div>
  </>
}

function DiscountCoupon(){
  return<>
    <label>Fair Discount Code</label>
    <input type="text" placeholder="discount coupon" />
  </>
}
function App() {

  return (
    <div className="App">
     {/* <h1>Hello React Cart</h1> */}
    <DiscountCoupon />
     <ListItems />
     <Cart />
    </div>
  );
}

export default App;
