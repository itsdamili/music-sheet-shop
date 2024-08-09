// components/ProductCard.js
import styled from '@emotion/styled';
import Image from 'next/image';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  max-width: 300px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin: 10px 0;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0;
  }
`;

const ProductCard = ({ name, composer, year, price }) => {
  return (
    <Card>
      <Image
        src="/images/music-sheet.jpg"
        alt={name}
        width={250}
        height={350}
        placeholder="blur"
        blurDataURL="/images/music-sheet.jpg" // Optional: Placeholder image
      />
      <h2>{name}</h2>
      <p>Composer: {composer}</p>
      <p>Year: {year}</p>
      <p>Price: ${price}</p>
    </Card>
  );
};

export default ProductCard;
