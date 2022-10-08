import React, {useState, useEffect} from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";

/* traigo los parametros del id que seleccione */

import {useParams} from "react-router";


const ItemDetailContainer = () => {
    const [user, setUser] = useState ([]);

    /* traigo el id como parametro y lo desestructuro para que solo me devuelva el numero y usarlo */

    let {id} = useParams();

    /* Llamo a la base de datos pero solo del id del que necesito la info para mostrar luego en ItemDetail */

    useEffect (() => {
        axios (`https://api.github.com/users/${id}`).then((res) => setUser (res.data)
               
        );

    }, [id]);

        
    return (
            <ItemDetail data = {user}/>
        );
    

}

export default ItemDetailContainer;

