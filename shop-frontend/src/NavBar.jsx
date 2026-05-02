//The following code uses a NavBar bootstrap Component from: 
// https://getbootstrap.com/docs/4.0/components/navbar

//The following is a link to small button at the top
//https://getbootstrap.com/docs/5.0/utilities/position/

import SearchResults from './SearchResults';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar(props){

const [searchTerm, setSearchTerm] = useState('');

//Getting the number of items in the cart.
let numItems = 0
  props.cartItems.map((t) => {
  numItems = numItems + t.quantity
})

//Sets the search term from the input
const setSearch = () => {
  //Retrieves search term from input
   const searchTerm = document.getElementById('search').value;
   //Sets search term
   setSearchTerm(searchTerm)
}

    return(
      <>
      <nav id="nav_bar_1" class="navbar navbar-expand-lg navbar-dark">
        {/*Adds a logo with the link to the home page */}
        <a class="navbar-brand" href="/">Michael's Shop</a>
        <div class="collapse navbar-collapse" id="nav-1">
          {/* Using a search bar with a bootstrap nav component, reference: https://getbootstrap.com/docs/4.0/components/navbar/*/}
            <input onChange={setSearch} id="search" name="search" class="form-control mr-sm-2" placeholder="Search" aria-label="Search" />
            {/*Using a magnifying glass icon: https://icons.getbootstrap.com/icons/search/ */}
            <a href={`/search/${searchTerm}`}><button id="search-icon"><i class="bi bi-search"></i></button></a>
            <a class="nav-item nav-link" href="/Cart">
            {/*Using the basket bootstrap icon: https://icons.getbootstrap.com/icons/basket/ */}
            <i class="bi bi-basket"></i>
            {/* The following code uses a Bootstrap badge component to display the 
                number of items in the shopping cart.
              Reference: https://getbootstrap.com/docs/4.0/components/badge/ */}
            {<span class="badge badge-info text-warning">{numItems}</span>}
            </a>
        </div>
      </nav>
      
      <div id="nav_bar_2">
        <nav id="nav-bar" class="navbar navbar-expand-lg navbar-dark">
          {/* Using a toggle navbar with the following reference: https://getbootstrap.com/docs/4.0/components/navbar/*/}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-2" aria-controls="nav-2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="nav-2">
          <div class="navbar-nav">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a href="/" class="nav-link">All</a>
            </li>
            <li class="nav-item">
              <a href="/featured" class="nav-link">Featured Items</a>
            </li>
            <li class="nav-item">
              <a href="/home-care" class="nav-link">Home Care</a>
            </li>
            <li class="nav-item">
              <a href="/office-supplies" class="nav-link">Office Supplies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Medical Care</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Best Sellers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Today's Deals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Gift Cards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Sell</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Groceries</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">New Releases</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Registry</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Smart Home</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
      </div>
      </>

    )


}

export default NavBar;