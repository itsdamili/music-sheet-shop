// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Cookies from 'universal-cookie';
import { useSelector } from 'react-redux';

const NavContainer = styled.nav`
  background-color: #1c1c1b;
  color: #fffff5;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #fffff5;
    font-weight: bold;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;

    &:hover {
      background-color: #ccac00;
      color: #1c1c1b;
    }
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.2rem;

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
  const cookies = new Cookies();
  const user = cookies.get('user');
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  const handleLogout = () => {
    cookies.remove('user', { path: '/' });
    window.location.reload();
  };

  return (
    <NavContainer>
      <NavLinks>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </NavLinks>
      <UserSection>
        {user ? (
          <>
            <span>Welcome, {user.username}!</span>
            <button onClick={handleLogout} style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/signup">Sign Up</Link>
            <Link href="/login">Login</Link>
          </>
        )}
        <Link href="/cart">
          <CartIcon>
            🛒 {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
          </CartIcon>
        </Link>
      </UserSection>
    </NavContainer>
  );
};

export default Navbar;
