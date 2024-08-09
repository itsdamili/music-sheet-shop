import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const CartContainer = styled.div`
  padding: 20px;
  color: #1c1c1b;
  background-color: #fffff5;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  h2 {
    color: #1c1c1b;
  }

  p {
    color: #1c1c1b;
  }

  button {
    background-color: #5b166d;
    color: #fffff5;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #ccac00;
    }
  }
`;

export default function Cart() {
  const [items, setItems] = useState([]);

  const loadCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(cartItems);
  };

  useEffect(() => {
    loadCartItems();

    const handleCartUpdate = () => {
      loadCartItems();
    };

    window.addEventListener('cartUpdate', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdate', handleCartUpdate);
    };
  }, []);

  const removeFromCart = (id) => {
    const newCartItems = items.filter(item => item.id !== id);
    setItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems));

    window.dispatchEvent(new Event('cartUpdate'));
  };

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {items.length > 0 ? (
        items.map(item => (
          <CartItem key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </CartItem>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </CartContainer>
  );
}
