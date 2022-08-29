import React from "react"
import logoCarrito from '../../images/carrito.png';

function CartWidget () {
    return (
        <div>
            <a href ="/">
                <img src={logoCarrito} alt="logocarrito" id="" className="logoCarrito"></img>
            </a>
        </div>  
    )
}

export default CartWidget