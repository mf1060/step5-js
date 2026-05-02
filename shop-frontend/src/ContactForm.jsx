function ContactForm(){

    //Uses the following reference for creating a form.
    //https://www.w3schools.com/html/html_forms.asp

    //Using the following reference for bootstrap styling.
    //https://getbootstrap.com/docs/4.0/components/forms/

    return(
        <form>
            <div class="form-row">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="First name" /><br />
                    <input type="text" class="form-control" placeholder="Last name" /><br />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email" /> <br />
                    <input type="text" class="form-control" placeholder="Phone" /> <br />
                    <input type="text" class="form-control" placeholder="Address, Line 1" /> <br />
                    <input type="text" class="form-control" placeholder="Address, Line 2" /> <br />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="City" /> <br />
                    <input type="text" class="form-control" placeholder="State" /> <br />
                    <input type="text" class="form-control" placeholder="Zip" /> <br />
                </div>
                </div>
            
        </form>
    )


}

export default ContactForm;