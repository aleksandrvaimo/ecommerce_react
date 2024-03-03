import React from 'react';
import './App.css';
import Products from "./components/Products";
import { GetProducts } from "./components/hooks/GetProducts";
import Orders from "./components/Orders";
import CurrentOrder from "./components/CurrentOrder";

function App() {
    const { products } = GetProducts();

    return (
        <>
            <Orders />
            <Products products={products} />
            <CurrentOrder />
        </>
    );
}

export default App;