//This is the place order button for the checkout page

function PlaceOrder(props){
    const API_URL = 'http://localhost:5000/items';
    let cartTotal = 0
  
    //Calculating the cart total from each cart item.
    props.cartItems.map((t) => {
      cartTotal += (t.price * t.quantity)
    })

    //Calculating taxes
    let taxes = cartTotal*0.06;

    //Adding a function for refreshing the cart when the user checks out.
    const refreshCart = () => {

        props.cartItems.map((t) => {
            //Sends the update to the server.
            fetch(`${API_URL}/${t.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'quantity': 0,
                    'inCart': false
                }),
            });
        })
    }

    return(
        <>
            <a href="/orderPlaced"><button onClick={refreshCart} id="place-order" class="btn btn-primary">Place your order</button></a> <br />
            {/*Using Amazon's privacy policy and terms of use links */}
            <p>By placing your order, you agree to the store's <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" target="_blank"> privacy notice</a> and <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM" target="_blank"> conditions of use</a></p>

            {/*//Using Bootstrap Table to display totals
            //Reference: https://getbootstrap.com/docs/4.0/content/tables/ */}
            <table class="table">
                <thead>

                </thead>
                
                <tbody>
                    <tr>
                        <td>Item:</td>
                        <td>${cartTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping and Handling:</td>
                        <td>${6.99}</td>
                    </tr>
                    <tr>
                        <td>Taxes:</td>
                        <td>${taxes.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td><h3><b>Order Total</b></h3></td>
                        <td>${(cartTotal + taxes + 6.99).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            
        </>
    )

}

export default PlaceOrder;  