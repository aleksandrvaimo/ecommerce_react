const Item = ({item}) => {

  return (
      <div className="order-item">
            <div key={item.id}>ID: {item.id}<br /> Name: {item.name}<br /> Price: {item.price} <br /> Qty: {item.qty}<br /></div>
      </div>
  );
}

export default Item;
