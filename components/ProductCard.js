// components/ProductCard.js
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';

const Card = styled.div`
  border: 1px solid #5b166d;
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
    color: #5b166d;
  }

  p {
    margin: 5px 0;
  }

  button {
    background-color: #186f22;
    color: #fffff5;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: #ccac00;
    }
  }

  .remove {
    background-color: #5b166d;
  }
`;

const ProductCard = ({ name, composer, year, price }) => {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
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
      <button
        className={inCart ? 'remove' : ''}
        onClick={toggleCart}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </Card>
  );
};

export default ProductCard;
