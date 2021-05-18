import React, {Fragment} from 'react';
import {capitalize} from "../scripts";

const Product = ({product}) => {
    return (
        <Fragment>
            <p>Producto: {capitalize(product.name)}, Precio: ${product.price}</p>
        </Fragment>
    )
}

export default Product;