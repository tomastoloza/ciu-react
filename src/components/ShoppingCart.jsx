import React, {Fragment, useState} from 'react';
import Product from "./Product";


const ShoppingCart = ({shoppingCart, setShoppingCart}) => {
    function removeFromShoppingCart(productToBeRemoved) {
        setShoppingCart(shoppingCart.filter(product => product.id !== productToBeRemoved.id))
    }

    return (
        <Fragment>
            <button>Shopping cart {shoppingCart.length}</button>
            <ul>
                {shoppingCart.map(product => {
                    return <div>
                        <Product product={product} setShoppingCart={setShoppingCart}/>
                        <button onClick={() => removeFromShoppingCart(product)}>Remover</button>
                    </div>
                })}
            </ul>
        </Fragment>
    )
}

export default ShoppingCart;