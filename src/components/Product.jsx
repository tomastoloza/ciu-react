import React, {Fragment} from 'react';
import {capitalize} from "../scripts";

const Product = ({product}) => {
    return (
        <div className="item">
            <img src={product.image} alt={product.name}/>
            <hr/>
            <p><b>{capitalize(product.name)}</b></p>
            <p>${product.price}</p>
            <button className={"comprar"}>Comprar</button>
        </div>
    )
}

export default Product;