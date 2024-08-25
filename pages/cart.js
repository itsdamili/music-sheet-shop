import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../slices/cartSlice';
import { useRouter } from 'next/router';
import PrimaryButton from '../components/buttons/PrimaryButton';

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
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
      background-color: #e55337;
    }
  }
`;

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleProceedToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <CartItem key={item.id}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </CartItem>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {items.length > 0 && (
        <PrimaryButton onClick={handleProceedToCheckout}>
          Proceed to Checkout
        </PrimaryButton>
      )}
    </CartContainer>
  );
}
