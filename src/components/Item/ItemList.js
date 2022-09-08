import React, {useState, useEffect} from "react";
import Item from "./Item"



const ItemList = () => {

    /* traigo info de la API de github para probar en la card */
    const [users, setUsers] = useState ([]);

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    } , []) /* cuando coloco un array vacio el efecto se aplica luego del primer render */

    return (
        <div>
            {users.map((user) => {
                return <Item key={user.id} data={user} />
            })} 
        </div> 
)

}

export default ItemList