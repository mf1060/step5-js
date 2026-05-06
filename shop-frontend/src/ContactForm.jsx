function ContactForm(){

    //Uses the following reference for creating a form.
    //https://www.w3schools.com/html/html_forms.asp

    //Using the following reference for bootstrap styling.
    //https://getbootstrap.com/docs/4.0/components/forms/

    return(
        <form>
            <div class="form-row">
                <div class="form-group">
                    <input type="text" defaultValue="Steve" class="form-control" placeholder="First name" /><br />
                    <input type="text" defaultValue="Rogers" class="form-control" placeholder="Last name" /><br />
                </div>
                <div class="form-group">
                    <input type="text" defaultValue="srogers@avengers.gov" class="form-control" placeholder="Email" /> <br />
                    <input type="text" defaultValue="555-555-5555" class="form-control" placeholder="Phone" /> <br />
                    <input type="text" defaultValue="1234 Marvel Ln." class="form-control" placeholder="Address, Line 1" /> <br />
                    <input type="text" class="form-control" placeholder="Address, Line 2" /> <br />
                </div>
                <div class="form-group">
                    <input type="text" defaultValue="Brooklyn" class="form-control" placeholder="City" /> <br />
                    <input type="text" defaultValue="NY" class="form-control" placeholder="State" /> <br />
                    <input type="text" defaultValue="19120" class="form-control" placeholder="Zip" /> <br />
                </div>
                </div>
            
        </form>
    )


}

export default ContactForm;