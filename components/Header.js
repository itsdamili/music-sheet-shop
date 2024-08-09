import styled from '@emotion/styled';
import Link from 'next/link';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const Header = () => (
  <Nav>
    <Link href="/">Shop</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
  </Nav>
);

export default Header;
