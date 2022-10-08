import React, {useState, useEffect} from "react";
import Item from "./Item"
import LoadingSpiner from "../LoadingSpiner/LoadingSpiner"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import './ItemList.css';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/dataBase";

const ItemList = () => {

    
    const [users, setUsers] = useState ([]);
    /* uso valor buleano para desaparecer el spinner cuando ya cargó la pagina */
    const [loading, setLoading] = useState (false);  

    /* const loadApi = () => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    } */

    const loadApi = async () => {
        const q = query(collection(db,"products"));

        const docs = [];

        const querySnapshot = await getDocs (q);
        querySnapshot.forEach((doc) => {

            docs.push({...doc.data(), id: doc.id });

        });
        setUsers(docs);
    }

    /* traigo info de la API de github para probar en la card */
    useEffect(() => {
        setLoading(true);
                
        setTimeout(() => {
            setLoading(false);
            loadApi();
        }, 3000)
        
    } , []) /* cuando coloco un array vacio el efecto se aplica luego del primer render */

    return (
        <Container fluid>
            <Row>
                {loading ? <LoadingSpiner /> : null}
                {users.map((user) => {
                    return (
                    <Col md={4} key={user.id}>
                        <Link to = {`/detail/${user.id}`} className="cardText">
                            <Item data = {user} />
                        </Link>
                    </Col>
                )})} 
            </Row>
        </Container>
    );

}

export default ItemList