import React, {useState, useEffect} from "react";
/* import axios from "axios"; */
import ItemDetail from "./ItemDetail";

/* traigo los parametros del id que seleccione */

import {useParams} from "react-router";

/* traigo firebase */

import { db } from "../../components/firebase/dataBase";

import {collection, query, getDocs, documentId, where,} from "firebase/firestore";


const ItemDetailContainer = () => {
    const [user, setUser] = useState ([]);

    /* traigo el id como parametro y lo desestructuro para que solo me devuelva el numero y usarlo */

    const {id} = useParams();

    /* Llamo a la base de datos pero solo del id del que necesito la info para mostrar luego en ItemDetail */

    useEffect (() => {

        const getDetail = async () => {
            const q = query(collection(db, "products"), where(documentId(), "==", id));
            const docs = [];
            const querySnapshot = await getDocs (q);

            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id});
            });
            setUser(docs);
        };
        getDetail();

    }, [id]);

        
    return (
            <ItemDetail data = {user}/>
        );
    

}

export default ItemDetailContainer;

