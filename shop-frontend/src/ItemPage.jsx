import Card from './Card';
import QuantityToggle from './QuantityToggle';

//This is the component for each individual item page.
function ItemPage(props){
    //Creates a state variable for the data related to the item
    
    return (
        <>
         {/*Uses a side-by-side layout with the following reference: https://getbootstrap.com/docs/4.0/layout/grid/ */}
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
                    <QuantityToggle id = {props.item.id} quantity={props.item.quantity} />
                </div>
            </div>   
        </div>
        </>
    )


}

export default ItemPage;