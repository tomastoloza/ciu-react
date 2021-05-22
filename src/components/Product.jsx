import React, {Fragment} from 'react';
import "./Product.css"

const Product = ({product, setShoppingCart, onClick, button}) => {
    function addToShoppingCart() {
        setShoppingCart(products => [...products, product])
    }

    return (
        <section className={"product"}>
            <header>
                {(product.name)}
                <p>${product.price}</p>
                <button onClick={onClick || addToShoppingCart}>{button}</button>
            </header>
        </section>
    )
}

export default Product;