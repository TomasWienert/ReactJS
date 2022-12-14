import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetailStyle.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail = ({data}) => {

    return (
        <div>
        <Container fluid className="ItemDetail">
            <Row>
                <Col md={6}>
                    <h1>{data.nombre}</h1>
                    <img src={data.img} alt=""/>
                </Col>
                <Col md={6}>
                    <h1>{data.marca}</h1>
                    <p></p>    
                </Col>
            </Row>
        </Container>
        <ItemCount/>
        </div>
    );
}




export default ItemDetail;