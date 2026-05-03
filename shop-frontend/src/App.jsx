//Using React Router with the following reference: https://www.w3schools.com/react/react_router.asp
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ShoppingCart from './ShoppingCart';
import Home from './Home';
import NavBar from './NavBar';
import ItemPage from './ItemPage';
import SearchResults from './SearchResults';
import Cart from './ShoppingCart';
import Checkout from './Checkout';
import PlaceOrderPage from './PlaceOrderPage';
import Category from './Category';
import Admin from "./Admin";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import OffCanvas from './OffCanvas';


function App() {

  const API_URL = 'http://localhost:5000/items';
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    //Fetches data from the server and 
    //stores all of the product items
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setAllItems(data))
  }, []);

  //Getting Cart Item Details
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      //Retrieves only items where inCart = true
      .then(data => data.filter(i => i.inCart == true))
      //Stores all data to cart items.
      .then(items => setCartItems(items))
  })

  return (
    <>
    <BrowserRouter>
        <NavBar allItems={allItems}
        cartItems={cartItems} 
        setSearchTerms={setSearchTerm} />

      <Routes>
        {/*Creating a route for the home page */}
        <Route path="/" element={<Home allItems={allItems}/>} />
        {/*Creating a route for the search bar */}
        
        <Route path="/Cart" element={<ShoppingCart allItems={allItems} cartItems={cartItems} />} />

        {/*Creating a route for an ItemPage to each item in the database */}
        {/*This will likely be implemented with a map function in the future */}
        {allItems.map((t) => (
            <Route path={`/${t.id}`} element={<ItemPage item={t} />} />  
        ))}

        {/*Create useParams, reference: https://reactrouter.com/api/hooks/useParams*/}
        <Route path="/search/:searchTerm" element={<SearchResults allItems={allItems} searchTerm={searchTerm} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} />
        <Route path="/orderPlaced" element={<PlaceOrderPage />} />
        <Route path="/featured" element={<Category allItems = {allItems} searchCategory={"Featured Items"} />} />
        <Route path="/home-care" element={<Category allItems = {allItems} searchCategory={"Home Care"} />} />
        <Route path="/office-supplies" element={<Category allItems = {allItems} searchCategory={"Office Supplies"} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addItem" element={<AddItem  />} />
        <Route path="/deleteItem" element={<DeleteItem allItems={allItems}/>} />
      </Routes>

    </BrowserRouter>

    {/*Using off canvas and an offcanvas-body element with Bootstrap:
    using the following reference, https://getbootstrap.com/docs/5.3/components/offcanvas/ */}

    <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" data-bs-scroll="true">
        <div class="offcanvas-body justify-content-end flex-grow-1 pe-3">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          <OffCanvas cartItems={cartItems}/>
        </div>
        
    </div>
      
    </>
  )
}

export default App;
