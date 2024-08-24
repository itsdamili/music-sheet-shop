import { useDispatch } from 'react-redux';
import { addItemToCart } from '../slices/cartSlice';
import styled from '@emotion/styled';
import { useState } from 'react';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;
  background-color: #f9f9f9;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProductName = styled.h2`
  color: #5b166d;
`;

const ProductInfo = styled.p`
  color: #333;
`;

const Button = styled.button`
  background-color: ${({ added }) => (added ? '#ccac00' : '#1c1c1b')};
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ added }) => (added ? '#ccac00' : '#333')};
  }
`;

const ProductCard = ({ id, name, composer, year, price }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id, name, composer, year, price }));
    setAdded(true);
  };

  return (
    <Card>
      <ProductName>{name}</ProductName>
      <ProductInfo>Composer: {composer}</ProductInfo>
      <ProductInfo>Year: {year}</ProductInfo>
      <ProductInfo>Price: ${price}</ProductInfo>
      <Button added={added} onClick={handleAddToCart}>
        {added ? 'Added' : 'Add to Cart'}
      </Button>
    </Card>
  );
};

export default ProductCard;
