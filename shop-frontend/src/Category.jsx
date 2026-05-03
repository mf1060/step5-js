import Card from './Card'
//creates a list of items based on category
function Category({allItems, searchCategory}){

      //Function for filtering items from all the items in our database
  const setCategory = () => {
    ////On change, the function would display any item that matches language in the search term.
    //Uses filter to store all items that match the search term to the items variable.
    //Uses includes to search for items that contain the search term
   return allItems.filter(items => items.category.includes(searchCategory));
}

  return(
    <>
    <div>
      <h1>{searchCategory}</h1>
      <div class="row">
      {/*Displaying a card for each search result*/}
      {setCategory().map((t) => {
          return (
          //Arranges cards so that there are four cards in each row in the search results.
          <div key={t.id} class="col-sm-3">
          <Card item={t} />
          </div>
        )
      })}

      </div>
      </div>
    </>
  );

}

export default Category;