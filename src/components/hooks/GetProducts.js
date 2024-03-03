import {useEffect, useState} from "react";
import axios from "axios";

export function GetProducts() {
    const [products, setProducts] = useState([]);

    const getProducts = async () =>  {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BE_URL}/api/products`);
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return {products};
}