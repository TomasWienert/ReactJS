import React from "react";

const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.parrafo}</p>  
        </div> 
    );
};

export default ItemListContainer