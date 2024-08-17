import ProductCard from '../components/ProductCard';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
};

export const Default = () => (
  <ProductCard
    id={1}
    name="Symphony No. 5"
    composer="Ludwig van Beethoven"
    year="1808"
    price="9.99"
  />
);
