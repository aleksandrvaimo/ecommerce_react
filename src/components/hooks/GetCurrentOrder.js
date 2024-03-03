import axios from "axios";

export function GetCurrentOrder(orderId, setUpdate, setOrder, setOrderItems) {
    const getOrderData = async () => {
        try {
            if (!orderId) {
                return;
            }

            const response = await axios.get(`${process.env.REACT_APP_BE_URL}/api/orders/${orderId}`);
            if (response.data) {
                setOrder(response.data);
            }

            const responseItems = await axios.get(`${process.env.REACT_APP_BE_URL}/api/orders/${orderId}/products`);
            if (responseItems.data) {
                setOrderItems(responseItems.data)
            }

            setUpdate(false);
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    };

    return getOrderData;
}