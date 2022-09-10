import React, {useState, useEffect} from "react";
import Item from "./Item"
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner"


const ItemList = () => {

    
    const [users, setUsers] = useState ([]);
    /* uso valor buleano para desaparecer el spinner cuando ya cargó la pagina */
    const [loading, setLoading] = useState (false);  

    const loadApi = () => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    }

    /* traigo info de la API de github para probar en la card */
    useEffect(() => {
        setLoading(true);
                
        setTimeout(() => {
            setLoading(false);
            loadApi();
        }, 4000)
        
    } , []) /* cuando coloco un array vacio el efecto se aplica luego del primer render */

    return (
        
        <div>
            {loading ? <LoadingSpiner /> : null}
            {users.map((user) => {
                return <Item key={user.id} data={user} />
            })} 
        </div> 
)

}

export default ItemList