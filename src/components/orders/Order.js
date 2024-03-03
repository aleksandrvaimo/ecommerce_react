import React, {useContext} from 'react';
import Button from "../UI/ Button/Button";
import {OrderContext} from "../../context/OrderContext";

const Order = ({order, updateOrder}) => {
    const {orderId, setOrderId, setUpdate} = useContext(OrderContext);

    const clickHandler = () => {
        setOrderId(order.id);
        setUpdate(true)
    }

    return (
      <li className="order-element">
            <div>
                {orderId !== order.id && <Button title="Use Order" clickHandler={clickHandler} />}
                {order.status !== 'PAID' && <Button title="Update Status" clickHandler={() => updateOrder()} />}
                <span>Order ID: {order.id}</span>
            </div>
        </li>
    );
}

export default Order;
