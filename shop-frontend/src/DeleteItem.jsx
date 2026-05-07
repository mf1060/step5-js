import PlaceOrder from "./PlaceOrder";

function DeleteItem(props){

    const API_URL = 'http://localhost:5000/items';

    const deleteItem = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
    }

    return (
        <>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.allItems.map((t) => (
            <tr key={t.id}>
              {/*Adds a link to each item page for the title */}
              <td><a href={`/${t.id}`}>{t.title}</a></td>
              <td>${t.price.toFixed(2)}</td>
               {/*Use image sizing, with the following reference: https://www.w3schools.com/tags/att_img_width.asp */}
              <td><img src={t.img} height="100" width="100" /></td>
              <td><button onClick={() => deleteItem(t.id)} class="btn btn-danger">Delete Item</button></td>
            </tr>  
    
        ))
        
        }
        </tbody>
      </table>
        </>
    )

}

export default DeleteItem;