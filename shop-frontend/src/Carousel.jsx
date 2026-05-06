import Card from './Card'

function Carousel(props){
  //The following references this source for implementing a carousel
  //https://getbootstrap.com/docs/4.0/components/carousel/

return(
    <>
    {/*Uses centering with the following reference: https://getbootstrap.com/docs/4.0/layout/grid/ */}
    <div class = "container col-6 col-md-4">
    <div id="product-carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* Using Bootstrap "jumbotron class with the following reference: https://getbootstrap.com/docs/4.0/components/jumbotron/ */}
      <div class="jumbotron">
        <div class="jumbotron">
          <div class="body">
            <div class="card-body">
              <p class="lead">The one-stop shop for any home or office needs.</p>
                <img class="card-img-bottom" src="/flowers.jpeg"></img>  
            </div>
          </div>    
        </div>
      </div>
    </div>
    {//Creating a carousel item for each product.
      props.allItems.map((item) => {
        return(
          <div key={item.title} class="carousel-item">
            <Card item={item} class="d-block w-100"/>
          </div>
        )

      })
    }
  </div>
</div>
    </div>
    </>
);

}

export default Carousel;