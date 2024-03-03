import { createContext, useState } from 'react'

export const OrderContext = createContext({
      update: false,
      setUpdate: () => {},
      orderId: false,
      setOrderId: () => {}
})

export const OrderState = ({children}) => {
    const [ orderId, setOrderId ] = useState(false)
    const [ update, setUpdate ] = useState(false)

    return (
        <OrderContext.Provider value={{orderId, setOrderId, update, setUpdate}}>
            {children}
        </OrderContext.Provider>
    )
}