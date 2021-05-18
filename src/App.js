import './App.css';
import React, {Fragment, useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const res = await fetch("http://localhost:3001/random/5");
        const data = await res.json();
        setProducts(data);
    }, []);

    return (
        <Fragment>
            <Header/>
            <h1>
                Roberson Brothers & Sons - Instrumentos Musicales
            </h1>
            {products && products.map(p => <Product product={p}/>)}
            <Footer estYear={2014}/>
        </Fragment>
    );
}

export default App;
