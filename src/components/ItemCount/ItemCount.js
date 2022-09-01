import React from "react";
import './ItemCount.css';
import Button from 'react-bootstrap/Button';

class ItemCount extends React.Component {
    constructor () {
        super();
        this.state = {
            counter: 0,
        };

        /* this.incrementCounter = this.incrementCounter.biend(this);   */
    }

    incrementCounter = () => {
        this.setState ({counter: this.state.counter + 1})
    }

    decrementCounter = () => {
        if (this.state.counter === 0) {
        alert("No se puede seleccionar menos de 0 productos")    
        }else{
        this.setState ({counter: this.state.counter - 1}) 
        }
    }


    render() {
        return (
            <div className="counterGeneral">
                <div className="counter">
                    <Button variant="danger" onClick={this.decrementCounter} className="increment">-</Button>
                    <p className="counterNumber">Cantidad: {this.state.counter}</p>
                    <Button variant="success" onClick={this.incrementCounter} className="decrement">+</Button>
                </div>
                <div>
                    <Button variant="primary">Agregar al carrito</Button>
                </div>
            </div>
        )
    }
}

export default ItemCount;