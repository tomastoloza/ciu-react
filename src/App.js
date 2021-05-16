import './App.css';
import React, {Fragment, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {getRandomInstrument} from "./scripts"
import Product from "./components/Product";

function App() {
    const [products] = useState([
        {
            "name": "accordian",
            "price": 1234
        },
        {
            "name": "air horn",
            "price": 1234
        },
        {
            "name": "baby grand piano",
            "price": 1234
        }]);
    return (
        <Fragment>
            <Header/>
            <h1>
                Roberson Brothers & Sons - Instrumentos Musicales
            </h1>
            {products.map(product =>
                <Product product={product}/>)}
            <Footer estYear={2014}/>
        </Fragment>
    );
}

export default App;
