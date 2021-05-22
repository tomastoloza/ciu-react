import React, {Fragment, useState} from 'react';
import Product from "./Product";


const ShoppingCart = ({shoppingCart, setShoppingCart}) => {
    function removeFromShoppingCart(productToBeRemoved) {
        setShoppingCart(shoppingCart.filter(product => product.id !== productToBeRemoved.id))
    }

    return (
        <Fragment>
            <p>Shopping cart {shoppingCart.length}</p>
            <ul>
                {shoppingCart.map(product => {
                    return <div className={"ShoppingCartItem"}>
                        <Product product={product} setShoppingCart={setShoppingCart}
                                 onClick={() => removeFromShoppingCart(product)} button={"Remover"}/>
                    </div>
                })}
            </ul>
        </Fragment>
    )
}

export default ShoppingCart;