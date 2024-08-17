import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import RemoveButton from './buttons/RemoveButton';

const Card = styled.div`
  border: 1px solid #186f22;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #fffff5;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  max-width: 300px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h2 {
    margin: 10px 0;
    font-size: 1.4rem;
    color: #1c1c1b;
  }

  p {
    margin: 5px 0;
  }
`;

const ProductCard = ({ id, name, composer, year, price }) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setInCart(cartItems.some((item) => item.id === id));
  }, [id]);

  const toggleCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (inCart) {
      const newCartItems = cartItems.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(newCartItems));
    } else {
      const newItem = { id, name, composer, year, price };
      localStorage.setItem('cart', JSON.stringify([...cartItems, newItem]));
    }
    setInCart(!inCart);

    window.dispatchEvent(new Event('cartUpdate'));
  };

  return (
    <Card>
      <Image
        src="/images/music-sheet.jpg"
        alt={name}
        width={250}
        height={350}
        placeholder="blur"
        blurDataURL="/images/music-sheet.jpg"
      />
      <h2>{name}</h2>
      <p>Composer: {composer}</p>
      <p>Year: {year}</p>
      <p>Price: ${price}</p>
      {inCart ? (
        <RemoveButton onClick={toggleCart}>Remove from Cart</RemoveButton>
      ) : (
        <PrimaryButton onClick={toggleCart}>Add to Cart</PrimaryButton>
      )}
    </Card>
  );
};

export default ProductCard;
