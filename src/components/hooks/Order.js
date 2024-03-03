import axios from "axios";

export function CreateOrder(setOrders, setOrderId, setUpdate) {
    const create = async () => {
        try {
            //debugger;
            const response = await axios.post(`${process.env.REACT_APP_BE_URL}/api/orders`);
            if (response.data) {
                //orders.push(response.data);
                setOrders(prevState => [...prevState, response.data]);
                setOrderId(response.data.id);
                setUpdate(true);
            }

        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return create;
}

export function UpdateOrderStatus(orders, orderId, setOrders, setOrderId, setUpdate) {
    const update = async () => {
        let options = {
            'status': 'PAID'
        }

        try {
            const response = await axios.patch(`${process.env.REACT_APP_BE_URL}/api/orders/${orderId}`, options);
            const updatedOrder = response.data;

            orders.map(order => {
                if (order.id === updatedOrder.id) {
                    order.status = updatedOrder.status;
                }
            });

            setOrders(orders)
            setOrderId(updatedOrder.id);
            setUpdate(true)
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return update;
}