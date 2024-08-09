// pages/cart.js
import styled from '@emotion/styled';
import { useState } from 'react';

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
    color: #5b166d;
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

const productsInCart = [
  // Example data - ideally, this would come from state management
  { id: 1, name: 'Clair de Lune', composer: 'Claude Debussy', year: 1890, price: 25 },
  // Other items
];

export default function Cart() {
  const [items, setItems] = useState(productsInCart);

  const removeFromCart = (id) => {
    setItems(items.filter(item => item.id !== id));
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
