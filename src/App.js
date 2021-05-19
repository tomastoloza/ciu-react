import './App.css';
import React, {Fragment, useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ButtonIcon from "./components/ButtonIcon";
import SortIcon from '@material-ui/icons/Sort';
import SortByAlphaOutlinedIcon from '@material-ui/icons/SortByAlphaOutlined';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
    const [products, setProducts] = useState(null);

    useEffect(async () => {
        const res = await fetch("http://localhost:3001/all");
        const data = await res.json();
        setProducts(data);
    }, []);

    const sortByName = () => {
        function compare(a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        }

        let sort = [...products].sort(compare);
        setProducts(sort);
    };

    const sortByPrice = () => {
        function compare(a, b) {
            if (a.price < b.price) {
                return -1;
            }
            if (a.price > b.price) {
                return 1;
            }
            return 0;
        }

        let sort = [...products].sort(compare);
        setProducts(sort);
    };

    return (
        <div className="main">
            <Navbar items={{"title": "Roberson Brothers & Sons - Instrumentos Musicales"}}/>
            <div className="buttons">
                <ButtonIcon icon={<SortByAlphaOutlinedIcon/>} action={sortByName}/>
                <ButtonIcon icon={<SortIcon/>} action={sortByPrice}/>
                <SearchBar/>
            </div>
            <div className={"products"}>
                {products && products.map(p => <Product product={p}/>)}
            </div>
            <Footer estYear={2014}/>
        </div>
    );
}

export default App;
