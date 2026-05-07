import Carousel from "./Carousel";
import Card from './Card';
import Category from "./Category";

function Home(props){

    return(
        <>
            <h1 class="display-4">Welcome to Michael's Shop!</h1>

            {/* Adds the Carousel Component */}
            <Carousel allItems = {props.allItems}/>
            {/* Adds categories for featured items, home care, and office supplies */}
            <Category allItems = {props.allItems} searchCategory={"Featured Items"} />
            <Category allItems = {props.allItems} searchCategory={"Home Care"} />
            <Category allItems = {props.allItems} searchCategory={"Office Supplies"} />
        </>
    )

}

export default Home;