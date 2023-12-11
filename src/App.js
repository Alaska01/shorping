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
},

{
  id: 4,
  price: 200,
  product: "Carrots",
  qty: 0
},
{
  id: 5,
  price: 200,
  product: "Oranges",
  qty: 0
},
{
  id: 6,
  price: 200,
  product: "Mangoes",
  qty: 0
},

{
  id: 7,
  price: 200,
  product: "vegetable Oil",
  qty: 0
},

{
  id: 8,
  price: 200,
  product: "Palm Oil",
  qty: 0
},

{
  id: 9,
  price: 200,
  product: "Bread",
  qty: 0
},

{
  id: 10,
  price: 200,
  product: "Tomatoes",
  qty: 0
},]

function handleAddToCart(){
  return
}

function ListItems(){
 
  return <>
  <div>
  <h1>List of Items to Shop From</h1>
  {initialData.map(item=> <p key={item.id}>{item.product} {item.price} <button>Add to Cart</button></p>)}
 
  </div>
  </>
}

function Cart(){
  return <>
    <div>
      <h1>Cart Dummy Data</h1>
      <p>N50,000</p>
      <ul>
        <li><button>-</button>rice<button>+</button> <span>Number of items in Numbers(X)</span></li>
        <li><button>-</button>beans<button>+</button> <span>Number of items in Numbers(X)</span></li>
      </ul>

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
