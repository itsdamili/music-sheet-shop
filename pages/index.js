import ProductCard from '../components/ProductCard';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/mockapiService';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

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
