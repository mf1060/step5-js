# Overview 
This is a repository for an e-commerce application using a React front-end and Javascript backend with JSON server. This is a final project in an internet application development class. 

Code was provided by the professor (Step 2) and amended to add [PATCH method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PATCH) and adapted to create the beginnings of an e-commerce app.

This application is styled with [Bootstrap](https://getbootstrap.com/). Both the frontend and backend are in the same repository for purposes of sharing the repository.

# Backend
To start the backend, navigate to the `shop-backend` directory in your terminal and use the command, `npm run start-backend.`

# Frontend
To start the frontend of the web application, navigate to the `shop-frontend` directory in your terminal and use the command `npm run dev`

# New Features for Step 5
- Adds a checkout page for a user to add contact and payment information to check out items in the cart. Payment is disabled, but placing an order will clear the cart and display a confirmation.
- Adds a subtotal to the offcanvas page.  
- Adds a selector to add multiple items to the cart on an item page. Once items are added to the cart with a selector, the page displays a confirmation.
- Adds an Admin page to add new items to the database or delete items from the database.


# Other Features
The current implemented features are:
- Use of [React Router](https://www.w3schools.com/react/react_router.asp) and a [Bootstrap NavBar](https://getbootstrap.com/docs/4.0/components/navbar/) to create pages and navigate between them. There is a home page, a search page, a cart page, and an individual page for each product. 
- The NavBar has a link to the home page, search page, and cart page (with a counter for the number of items in the cart).
- A JSON server database that stores product item details and keeps track of cart items.
- A Home Page that uses a Bootstrap "Carousel" to cycle through featured items.
- A search page that updates dynamically in response to a user's search query.
- An "add to cart" button that uses "+" and "-"/garbage can icons to add or remove items to the cart.
- Individual product pages linked to each item in the home, search, and cart pages.
- The ability to add items to the cart from the home, search, individual product pages, and the cart page.
- Uses a [Bootstrap offcanvas](https://getbootstrap.com/docs/5.3/components/offcanvas/) to show the contents of the cart whenever a new item is added to the cart.
- Adds a cart icon and a search icon
- Creates a search in the navbar using [React Router and useParams](https://www.w3schools.com/react/react_router.asp)
- Adds items to the home page as "Featured items"
- Uses styling for the Navbar that mimics the styling for Amazon.

# Description of JSX Components

- `App.jsx` - Requests both all items and cart items from the JSON database (`shop-backend/db.json`) and stores this information as stateful variables with `useEffect` and `useState`. Displays the navigation bar (`NavBar.jsx`) App.jsx creates links to other pages using  React Router. This component also displays an off canvas (`OffCanvas.jsx`) that shows the item cards in the cart and a subtotal.  
- `Home.jsx` - Displays the carousel and three categories of items as cards. 
- `NavBar.jsx` - Contains links to each page as well as a search bar for displaying search results (`SearchResults.jsx`). The NavBar contains four active links: three categories (Featured Items, Home Care, and Office Supplies) as well as a link to the admin page. 

## Admin
This is the page for adding and deleting items from the database. This page is accessed with a password. For this purpose, the password is "1234." 

- `Admin.jsx` represents the main admin page. When a user types in the correct password, two buttons are displayed: one to add items to the database and the other, to delete items. 
- `AddItem.jsx` This is the page for adding items to the JSON database with a POST HTTP command. The add item page does not import photos, it only stores a link to a photo that one would upload manually to `shop-frontend/public/`. This link is created from the title (e.g. "hair spray" generates an image link of "/hair_spray.jpeg" for the database).
- `DeleteItem.jsx` This is the page for deleting items from the JSON database with a DELETE HTTP command. 

## Displaying Items

- `Card.jsx` is an information card for each item with an incrementer/decrementer for adding items to the cart (`QuantityToggle.jsx`). Each card contains a link to an item's individual page (`ItemPage.jsx`).
- `Carousel.jsx` is a component on the home page that cycles through item cards.
- `Category.jsx` displays item cards that match a particular search term. This is used to create static categories of items to display on the home page and on pages in the NavBar. 
- `ItemPage.jsx` is a dedicated page for each item. Here, a user can select multiple of an item to add to the cart. When the user does this, the page transitions to a display that items have been added to the cart. This functionality is intended to mimic Amazon.com for purposes of the project.

## Checking Out
- `ShoppingCart.jsx` contains a table of items with incrementer/decrementer buttons (`QuantityToggle.jsx`) so that users can add more or less of an item to the cart. This component contains a button that takes a user to a checkout page. 

- `Checkout.jsx` is the checkout page for placing an order. The checkout page contains a form for contact information (`ContactForm.jsx`) and a form for payment information (`PaymentForm.jsx`). For the purposes of this project, no contact or payment information is processed. This component contains another component that displays a "place order" button with a total that includes tax and shipping (`PlaceOrder.jsx`). Once the user places an order, a `PlaceOrderPage.jsx` displays a confirmation page and clears the cart items. 









