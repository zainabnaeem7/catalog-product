// pages/cart.js
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
