import './App.css';
import React, {Fragment, useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [products, setProducts] = useState([
        {
            "id": 1,
            "name": "Harmonica",
            "price": 190454
        },
        {
            "id": 2,
            "name": "Harp",
            "price": 891418
        },
        {
            "id": 3,
            "name": "Harpsichord",
            "price": 555420
        }
    ]);

    return (
        <Fragment>
            <ShoppingCart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
            <h1>
                Roberson Brothers & Sons - Instrumentos Musicales
            </h1>
            {products.map(product => {
                return <Product product={product} products={products} action={"Add"} setShoppingCart={setShoppingCart}/>
            })}
            <Footer estYear={2014}/>
        </Fragment>
    );
}

export default App;
