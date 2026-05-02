import { useState } from "react"
import AddItem from "./AddItem"
import DeleteItem from "./AddItem"

function Admin(){

    const [input, setInput] = useState("")

    const password = "1234"

    const getPassword = () => {
        setInput(document.getElementById("password").value)
    }

    const welcomePage = (
        <>
        <h1>Welcome Site Administrator!</h1>

        <a href="/addItem"><button class="btn btn-primary">Add a new item</button></a> <br />
        <a href="/deleteItem"><button class="btn btn-primary">Delete an item</button></a>
        </>
    )

    const passwordPage = (

        <form>
            <input id="password" />
            <button onClick={getPassword}>Enter Password</button>
        </form>
    )


    return (

        <>
            {password==input ? welcomePage: passwordPage}
        </>


    )

}

export default Admin;