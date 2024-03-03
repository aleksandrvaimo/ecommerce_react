import React from 'react';
import Product from './products/Product';

const Products = ({ products }) => {

  return (
      <div className='products'>
          <h1>E-Commerce cart/order Test</h1>
          <ul>
            {products.length
                ? products.map(item =>
                    <Product
                        key={item.id}
                        products={products}
                        item={item} />
                  )
                : 'Collection is empty'
            }
          </ul>
      </div>
  );
}

export default Products;
