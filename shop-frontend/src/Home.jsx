import Carousel from "./Carousel";
import Card from './Card';
import Category from "./Category";

function Home(props){

    return(
        <>
        <h1>Welcome to Michael's Shop!</h1>
            {/* Using Bootstrap "lead" class for typography, reference: https://getbootstrap.com/docs/4.0/content/typography/#lead */}
            <p class="lead">Check out our featured items below!</p>
            {/* Adds the Carousel Component */}
            <Carousel allItems = {props.allItems}/>
            <Category allItems = {props.allItems} searchCategory={"Featured Items"} />
            <Category allItems = {props.allItems} searchCategory={"Home Care"} />
            <Category allItems = {props.allItems} searchCategory={"Office Supplies"} />
        </>
    )

}

export default Home;