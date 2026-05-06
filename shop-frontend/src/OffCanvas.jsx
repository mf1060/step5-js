import QuantityToggle from './QuantityToggle';
import Category from './Category';

import { useState, useEffect } from 'react';

function OffCanvas(){

  const API_URL = 'http://localhost:5000/items';
  const [cartItems, setCartItems] = useState([])

  //Getting Cart Item Details
    useEffect(() => {
      fetch(API_URL)
        .then(res => res.json())
        //Retrieves only items where inCart = true
        .then(data => data.filter(i => i.inCart == true))
        //Stores all data to cart items.
        .then(items => setCartItems(items))
    })
    
  let cartTotal = 0
  
  cartItems.map((t) => {
      cartTotal += (t.price * t.quantity)
  })
  
    return (
      <>
      <p>Subtotal</p>
      <p id="cart-offcanvas">${cartTotal.toFixed(2)}</p>
      <p>Your order qualifies for FREE delivery.</p>
      <a href="/Cart"><button id="cart-button" class="btn btn-primary">Go to Cart</button></a>
      {/*Using Bootstrap Tables to create spacing for the Cart Items
      //Reference: https://getbootstrap.com/docs/4.0/content/tables/ */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((t) => (
            <tr key={t.id}>
              {/*Adds a link to each item page for the title */}
              <td><a href={`/${t.id}`}>{t.title}</a></td>
              {/*Use image sizing, with the following reference: https://www.w3schools.com/tags/att_img_width.asp */}
              <td>${t.price.toFixed(2)}</td>
              <td><img src={t.img} height="50" width="50" /></td>
              <td><QuantityToggle id = {t.id} quantity={t.quantity}/> </td>
            </tr>  
    
        ))
        
        }
        </tbody>
      </table>
    </>
    )
}

export default OffCanvas;