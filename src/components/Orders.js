import React, { useContext, useState, useEffect } from 'react';
import Order from './orders/Order';
import { OrderContext } from '../context/OrderContext';
import Button from './UI/ Button/Button';
import { CreateOrder, UpdateOrderStatus } from './hooks/Order';

const Orders = () => {
    const { setOrderId, setUpdate } = useContext(OrderContext);
    const [ orders, setOrders ] = useState([]);
    const createOrder = CreateOrder(setOrders, setOrderId, setUpdate)

    useEffect(() => {
        createOrder();
    }, []);

  return (
      <div className="create-order-container">
          <div className='create-order'>
              <Button title='Create New Order' clickHandler={createOrder} />
          </div>
          <ul className="order-container">
            {orders.length
                ? orders.map(order =>
                    <Order
                        key={order.id}
                        order={order}
                        updateOrder={UpdateOrderStatus(orders, order.id, setOrders, setOrderId, setUpdate)} />
                )
                : 'Order collection is empty'
            }
          </ul>
      </div>
  );
}

export default Orders;
