import Card from './Card';
import QuantityToggle from './QuantityToggle';
import { useState } from 'react';
import Category from './Category';

//This is the component for each individual item page.
function ItemPage(props){
    //Sets the url for the server
    const API_URL = 'http://localhost:5000/items';
    
    //Sets state for the page after an item is in the cart.
    const [inCartPage, setInCartPage] = useState(false);
    //Sets state for the item's current quantity 
    const [quantity, setQuantity] = useState(props.item.quantity);
    //Variable for the cart total.
    let cartTotal = 0
    
    //Adding the total amount for each cart item. 
    props.cartItems.map((t) => {
        cartTotal += (t.price * t.quantity)
    })
    
     //Function for the page that displays when a user adds an item to the cart from the item page
    const updateDropdown = (id, quantityVar) => {
        //Set in cart page to true. 
        setInCartPage(true);
        //Updates the current quantity.
        setQuantity(props.item.quantity)
    
        //Creates an empty update object that will be passed to a PATCH request to the server
        let update = {}
        
        //If a user adds an item to the cart that was not previously added
        if (quantity == 0) {
            //Set quantity to the new quantity and inCart = true
            update = {
                'quantity': quantityVar,
                'inCart': true
            }
        // For all other situations, adds the number of items selected to the current quantity.
        } else {
            update = {'quantity': quantity + quantityVar}
        }

        //Sends the update to the server.
        fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        });

    }
// Defines the page befor the user places an item in the cart. 
//Uses a side-by-side layout with the following reference: https://getbootstrap.com/docs/4.0/layout/grid/ 
    const page = (
        <div class = "container">
           <div class="row">
                {/*Displays the image of the item added in one column */}
                <div class="col">
                    <a href={`/${props.item.id}`}><img class="card-img-top" src={props.item.img} alt={props.item.altImg} /></a>
                </div>
                {/*Displays the title, description, and price in a second column */}
                <div class="col">
                    <h1>{props.item.title}</h1>
                    <h2>Product Details</h2>
                    <p>{props.item.description}</p>
                    <h3 class="card-text">$ {parseFloat(props.item.price).toFixed(2)}</h3>
                </div>
                {/*Displays the selector for quantity in the third column */}
                <div class="col">
                    <h1>In Stock</h1>
                    {/*Using a select type, with the 
                    following reference: https://www.w3schools.com/tags/tag_select.asp */}
                    <select id="add-cart" name="add-cart">
                        {[1, 2, 3, 4, 5].map((val) => {
                            return (
                            <option id="add-cart" value={val}>{val}</option>
                            )
                        })}
                        
                    </select>
                    <br />
                    {/*Only displays the "Add to Cart" button
                    Typing to Number with the following reference:
                    https://www.w3schools.com/js/js_datatypes.asp */}
                    <button id="add-to-cart" data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasRight" 
                    aria-controls="offcanvasRight" 
                    onClick={() => {
                        updateDropdown(props.item.id, 
                    Number(document.getElementById("add-cart").value))}} class="btn btn-primary">Add to Cart</button>
                </div>
            </div>   
        </div>)

    const cartPage = (
        <>  
            <div class="table">
                <div class="row">
                    {/*Dispays the image of the item in one column */}
                    <div class="col">
                        <a href={`/${props.item.id}`}><img id="small-img" class="card-img-top" src={props.item.img} alt={props.item.altImg} /></a>
                        <i id="green-check" class="bi bi-check-circle"></i>
                        <h1>Added to cart</h1>
                    </div>
                    {/*Dispays the cart subtotal, the cart button, and checkout button in the 
                    second column */}
                    <div class="col">
                        <h2>Cart Subtotal: ${cartTotal.toFixed(2)}</h2>
                        <a href="/Cart"><button id="cart-button" class="btn btn-primary">Go to Cart</button></a>
                        <a href="/checkout"><button id="cart-button" class="btn btn-primary">Checkout</button></a>
                    </div>
                </div>
                {/*In the second row, displays featured items */}
                <div class="row">
                    <Category allItems = {props.allItems} searchCategory={"Featured Items"} />
                </div>
            </div>
        </>
    )
    
    
    return (

        <>
            {inCartPage ? cartPage: page}
        </>

    );


}

export default ItemPage;