import Link from 'next/link';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const NavContainer = styled.nav`
  background-color: #1c1c1b;
  color: #fffff5;
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  a {
    margin: 0 15px;
    font-weight: bold;
    font-size: 1.1rem;
    color: #fffff5;
    text-decoration: none;

    &:hover {
      color: #ccac00;
    }
  }
`;

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #ff0000;
    color: #fff;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.8rem;
  }
`;

const Navbar = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <NavContainer>
      <NavLinks>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </NavLinks>
      <Link href="/cart">
        <CartIcon>
          🛒 {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
        </CartIcon>
      </Link>
    </NavContainer>
  );
};

export default Navbar;
