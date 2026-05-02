function PaymentForm(){
    //Uses the following reference for creating a form.
    //https://www.w3schools.com/html/html_forms.asp

    //Using the following reference for bootstrap styling.
    //https://getbootstrap.com/docs/4.0/components/forms/

    return(
        <form>
            <div class="form-row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Name on Card" /> <br />
                    <input type="text" class="form-control" placeholder="Credit Card Number" /> <br />
                    <input type="text" class="form-control" placeholder="Security Code" /> <br />
                    <input type="text" class="form-control" placeholder="Expiration Date" /> <br />
                    <input type="text" class="form-control" placeholder="Zip Code" /> <br />
                </div>
            </div>
        </form>
    )


}

export default PaymentForm;