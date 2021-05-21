import React, {Fragment} from 'react';


const Product = ({product, setShoppingCart}) => {
    function addToShoppingCart() {
        setShoppingCart(products => [...products, product])
    }

    return (
        <Fragment>
            <p>Producto: {(product.name)}, Precio: ${product.price}</p>
            <button onClick={addToShoppingCart}>Agregar al carrito</button>
        </Fragment>
    )
}

export default Product;