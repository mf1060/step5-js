import Card from './Card';
import QuantityToggle from './QuantityToggle';
import { useState } from 'react';
//This is the component for each individual item page.
function ItemPage(props){
    //Sets the url for the server
    const API_URL = 'http://localhost:5000/items';
    //Sets states for the quantity

    const [inCartPage, setInCartPage] = useState(false);
    const [quantity, setQuantity] = useState(0);
    //Uses a side-by-side layout with the following reference: https://getbootstrap.com/docs/4.0/layout/grid/ 

     //Function for updating the server when users add or substract items
    const updateDropdown = (id, quantityVar) => {
        //Set in cart page to true. 
        setInCartPage(true);
        setQuantity(props.item.quantity)
    
        //Creates an empty update object that will be passed to a PATCH request to the server
        let update = {}
        
        //If a user adds an item to the cart that was not previously added
        if (quantity == 0) {
            //Set quantity=1 and inCart = true
            update = {
                'quantity': quantityVar,
                'inCart': true
            }
        // For all other situations, update the number of items selected in the server.
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

    const page = (
        <div class = "container">
           <div class="row">
                <div class="col">
                    <a href={`/${props.item.id}`}><img class="card-img-top" src={props.item.img} alt={props.item.altImg} /></a>
                </div>
                <div class="col">
                    <h1>{props.item.title}</h1>
                    <h2>Product Details</h2>
                    <p>{props.item.description}</p>
                    <h3 class="card-text">$ {parseFloat(props.item.price).toFixed(2)}</h3>
                </div>
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
                    Typing to a number with the following reference:
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
            <i id="green-check" class="bi bi-check-circle"></i>
            <a href={`/${props.item.id}`}><img id="small-img" class="card-img-top" src={props.item.img} alt={props.item.altImg} /></a>
            <h1>It's in the cart!</h1>
        </>
    )
    
    
    return (

        <>
            {inCartPage ? page: cartPage}
        </>

    );


}

export default ItemPage;