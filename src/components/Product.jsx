import React, {Fragment} from 'react';
import {capitalize} from "../scripts";

const Product = ({product}) => {
    return (
        <div className="item">
            <img src={product.image}/>
            {/*<hr/>*/}
            <p>{capitalize(product.name)}</p>
            <p>${product.price}</p>
            {/*<button className={"comprar"}>Comprar</button>*/}
        </div>
    )
}

export default Product;