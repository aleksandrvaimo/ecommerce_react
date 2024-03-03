import Button from "../UI/ Button/Button";
import {OrderContext} from "../../context/OrderContext";
import { useContext, useState } from "react";
import { AddProduct, AddUpdateProduct, ReplaceProduct, UpdateProductQty } from "../hooks/Products";

const Product = (props) => {
    const item = props.item;
    const products = props.products;
    const {orderId, setUpdate} = useContext(OrderContext);
    const [replace, setReplace] = useState(false)

    // Needed for add or update product based on provided qty(currently not used)
    const addUpdateQtyHandler = (e) => {
        item.qty = parseInt(e.target.value);
    }

    const replaceWithProductHandler = (e) => {
        let val = parseInt(e.target.value);
        let replacement = products.find(product => product.id === val);

        if (replacement && item.id !== val) {
            setReplace(true);
            item.replaced_with = {"product_id": val, "name": replacement.name, "price": replacement.price, "quantity": 1};
        } else {
            setReplace(false);
            delete item.replaced_with;
        }
    }

    // Add OR Update product based on provided qty
    // Need to use addUpdateOrderProducts instead of addOrderProducts
    // <span>Qty: <input onChange={addUpdateQtyHandler} defaultValue="1" type="number" /></span>
    // {!replace && <span><Button title="Add To Order" clickHandler={AddUpdateProduct(item, orderId, setUpdate)} /></span>}
    return (
        <li>
            <span>ProductID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>Price: {item.price}</span>
            <span>Replace With: <input onChange={replaceWithProductHandler} type="number" /></span>
            {!replace && <span><Button title="Add To Order" clickHandler={AddProduct(item.id, orderId, setUpdate)} /></span>}
            {replace && <span><Button title="Replace Item" clickHandler={ReplaceProduct(item, orderId, setUpdate)} /></span>}
            <span>Update Qty: <input onChange={UpdateProductQty(item.id, orderId, setUpdate)} defaultValue="1" type="number" /></span>
        </li>
    );
}

export default Product;
