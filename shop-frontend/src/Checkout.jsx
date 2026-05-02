import Cart from "./ShoppingCart";
import PlaceOrder from "./PlaceOrder";
import ContactForm from "./ContactForm";
import PaymentForm from "./PaymentForm";

function Checkout(props){
    //Using forms from bootstrap
    //https://getbootstrap.com/docs/4.0/components/forms/
    return (
        <>
         {/*Uses a side-by-side layout with the following reference: https://getbootstrap.com/docs/4.0/layout/grid/ */}
        <div class="container">
            <h1>Secure Checkout</h1>
            <div class="row">
                <div class="col">
                    {/*Adding forms with the following boostrap reference: https://getbootstrap.com/docs/4.0/components/forms/*/}
                    <h2>Contact and Delivery</h2>
                        <ContactForm />
            
                    <h2>Payment</h2>
                        <PaymentForm />
                </div>
                <div class="col">
                    <PlaceOrder cartItems={props.cartItems}/>
                </div>
            </div>
        
        </div>
        </>

    )
}

export default Checkout; 