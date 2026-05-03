import PlaceOrder from "./PlaceOrder";

function AddItem(){

    const API_URL = 'http://localhost:5000/items';

    const addNewItem = () =>{

        const title = document.getElementById("title").value
        const description = document.getElementById("description").value
        const category = document.getElementById("category").value
        const price = document.getElementById("price").value
        //Using the replaceAll function to add underscores to the file name
        //Reference: https://www.w3schools.com/jsref/jsref_string_replaceall.asp
        const fileName = "/" + title.toLowerCase().replaceAll(" ", "_") + ".jpeg"

        fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "title": title,
            "description": description,
            "category": category,
            "inCart": false,
            //Using a string replace function with the following reference, https://www.w3schools.com/jsref/jsref_replace.asp
            "img": fileName,
            "altImg": title,
            "price": price,
            "quantity": 0
        })
        }).then(res=> res.json());
    }

    return (
        <>
        <form>
            <input id="title" type="text" placeholder = "Title" /> <br />
            <input id="description" type="text" placeholder = "Description" /> <br />
            <input id="category" type="text" placeholder = "Category" /> <br />
            {/*Using number at two decimal places with the following reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number */}
            <input id="price" type="number" step="0.01" placeholder = "Price Ex. 6.99" /> <br />
        </form>
        <br />
        <button onClick={addNewItem} class="btn btn-primary">Add new item</button>
        </>
    )

}

export default AddItem;