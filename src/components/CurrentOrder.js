import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import Item from './orders/Item';
import { GetCurrentOrder } from './hooks/GetCurrentOrder';

const CurrentOrder = () => {
    const { update, orderId, setUpdate} = useContext(OrderContext);
    const [ order, setOrder ] = useState(null);
    const [ orderItems, setOrderItems ] = useState(null);
    const getOrderData = GetCurrentOrder(orderId, setUpdate, setOrder, setOrderItems);

    useEffect(() => {
        getOrderData();
    }, [ update ]);

    return (
        <>
            {order &&
             <div className='current-order'>
                 <div className='order-element'>Currently Used Order ID: {order.id}</div>
                 <div className='order-element'>Status: <span className={order.status.toLowerCase()}>{order.status}</span></div>
                 <div className='order-element'>Items: {orderItems ? orderItems.length : 0}</div>
                 <div className='order-item-container'>
                     {orderItems && orderItems.length
                         ? orderItems.map(item => <Item key={item.id} item={item} />)
                         : 'No Items'
                     }
                 </div>
             </div>}
        </>
    );
}

export default CurrentOrder;