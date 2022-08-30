import React from "react";
import CardComponent from "./cardcomponent/cardcomponent";
import Container from 'react-bootstrap/Container';

const ItemListContainer = ({title,parrafo}) => {
    return (
        <Container>
            <div>
                <h1>{title}</h1>
                <p>{parrafo}</p>  
                <CardComponent />
            </div> 
        </Container>   
    );
};

export default ItemListContainer