import React, {Fragment, useState} from 'react';
import "./Product.css"

const ShoppingCart = ({shoppingCart, setShoppingCart}) => {
    function removeFromShoppingCart(productToBeRemoved) {
        setShoppingCart(shoppingCart.filter(product => product.id !== productToBeRemoved.id))
    }

    let names = new Set(shoppingCart.map(instrument => {
            return instrument.name;
        }
    ));
    let quantity = shoppingCart.reduce((a, c) => {
        return (a[c.name] = (a[c.name] || 0) + 1, a)
    }, {});

    let price = shoppingCart.reduce((a, c) => {
        return (a[c.name] = (a[c.name] || 0) + c.price, a)
    }, {});

    let total = () => {
        let sum = 0;
        names.forEach(name => {
            sum += price[name]
        })
        return sum;
    }

    return (
        <div className={"shoppingCart"}>
            <p className={"shoppingCartButton"}>Shopping cart {shoppingCart.length}</p>
            <ul className={"shoppingCartItems"}>
                {[...new Set(shoppingCart)].map(product => {
                    return <div className={"product"}>
                        <p>{product.name} x{quantity[product.name]} ${price[product.name]}</p>
                        <button onClick={() => removeFromShoppingCart(product)}>Remover todos</button>
                    </div>
                })}
            </ul>
            <p>Total: ${total()}</p>
        </div>
    )
}

export default ShoppingCart;