import ProductCard from '../components/ProductCard';
import styled from '@emotion/styled';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

const products = [
    { id: 1, name: 'Clair de Lune', composer: 'Claude Debussy', year: 1890, price: 25 },
    { id: 2, name: 'Moonlight Sonata', composer: 'Ludwig van Beethoven', year: 1801, price: 30 },
    { id: 3, name: 'Prelude in G Minor', composer: 'Sergei Rachmaninoff', year: 1901, price: 35 },
    { id: 4, name: 'Symphony No. 5', composer: 'Dmitri Shostakovich', year: 1937, price: 40 },
    { id: 5, name: 'Piano Concerto No. 1', composer: 'Pyotr Ilyich Tchaikovsky', year: 1874, price: 45 },
    { id: 6, name: 'The Well-Tempered Clavier', composer: 'Johann Sebastian Bach', year: 1722, price: 50 },
    { id: 7, name: 'Eine kleine Nachtmusik', composer: 'Wolfgang Amadeus Mozart', year: 1787, price: 28 },
    { id: 8, name: 'Nocturne in E-flat Major', composer: 'Frédéric Chopin', year: 1832, price: 32 },
    { id: 9, name: 'Rhapsody in Blue', composer: 'George Gershwin', year: 1924, price: 42 },
    { id: 10, name: 'Symphony No. 9', composer: 'Ludwig van Beethoven', year: 1824, price: 50 },
    { id: 11, name: 'Carmen Suite No. 1', composer: 'Georges Bizet', year: 1875, price: 38 },
    { id: 12, name: 'Hungarian Rhapsody No. 2', composer: 'Franz Liszt', year: 1847, price: 45 },
];

export default function Home() {
  return (
    <>
      <h1>Music Sheet Shop</h1>
      <ProductsGrid>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsGrid>
    </>
  );
}
