import QuantityToggle from './QuantityToggle';
import Category from './Category';

function Cart(props){
    
  let cartTotal = 0
  
  props.cartItems.map((t) => {
      cartTotal += (t.price * t.quantity)
  })
  
    return (

      //Using Bootstrap Tables to create spacing for the Cart Items
      //Reference: https://getbootstrap.com/docs/4.0/content/tables/
      <div id="cart">
        <h1>Cart</h1>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((t) => (
            <tr key={t.id}>
              {/*Adds a link to each item page for the title */}
              <td><a href={`/${t.id}`}>{t.title}</a></td>
              {/*Use image sizing, with the following reference: https://www.w3schools.com/tags/att_img_width.asp */}
              <td>${t.price}</td>
              <td><img src={t.img} height="100" width="100" /></td>
              <td><QuantityToggle id = {t.id} quantity={t.quantity}/> </td>
            </tr>  
    
        ))
        
        }
        </tbody>
      </table>
    
    {/*Adds a total at the bottom of the page */}
    <p>Total: ${cartTotal.toFixed(2)}</p>
    <a href="/checkout"><button id="cart-button" class="btn btn-primary">Checkout</button></a>
    <Category allItems = {props.allItems} searchCategory={"Featured Items"} />
    </div>
    )
}

export default Cart;