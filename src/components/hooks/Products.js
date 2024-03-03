import axios from "axios";

export function AddProduct(itemId, orderId, setUpdate) {
    const AddProduct = async (e) => {
        e.preventDefault()

        const options = [itemId]; // Can be added multiple items at once: ['123', '456', '999']

        try {
            await axios.post(`${process.env.REACT_APP_BE_URL}/api/orders/${orderId}/products`, options);
            setUpdate(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return AddProduct;
}

// Add OR Update product based on provided qty(currently not used)
// Need to use addUpdateOrderProducts instead of addOrderProducts
// <span>Qty: <input onChange={addUpdateQtyHandler} defaultValue="1" type="number" /></span>
// {!replace && <span><Button title="Add To Order" clickHandler={AddUpdateProduct(item, orderId, setUpdate)} /></span>}
export function AddUpdateProduct(item, orderId, setUpdate) {
    const addUpdateProduct = async (e) => {
        e.preventDefault()
        item.qty = item.qty ?? 1;
        const options = [item];

        try {
            await axios.post(`${process.env.REACT_APP_BE_URL}/api/orders/${orderId}/products`, options);
            setUpdate(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return addUpdateProduct;
}

export function ReplaceProduct(item, orderId, setUpdate) {
    const replaceProduct = async (e) => {
        e.preventDefault()
        item.replaced_with.quantity = item.qty ?? 1;
        const options = {
            replaced_with: item.replaced_with
        };

        try {
            await axios.patch(`${process.env.REACT_APP_BE_URL}/api/orders/${orderId}/products/${item.id}`, options);
            setUpdate(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return replaceProduct;
}

export function UpdateProductQty(itemId, orderId, setUpdate) {
    const updateProductQty = async (e) => {
        e.preventDefault()
        let qty = parseInt(e.target.value);
        const options = {
            quantity: qty
        };

        try {
            await axios.patch(`${process.env.REACT_APP_BE_URL}/api/orders/${orderId}/products/${itemId}`, options);
            setUpdate(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return updateProductQty;
}