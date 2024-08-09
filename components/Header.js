// components/Header.js
import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

const HeaderContainer = styled.header`
  background-color: #1c1c1b;
  padding: 20px;
  color: #fffff5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  nav {
    display: flex;
    align-items: center;

    a {
      color: #fffff5;
      margin-left: 20px;
      font-size: 1.1rem;
      text-decoration: none;

      &:hover {
        color: #ccac00;
      }
    }

    .cart-icon {
      position: relative;
      margin-left: 20px;
      cursor: pointer;

      svg {
        fill: ${props => (props.itemsInCart > 0 ? '#ccac00' : '#fffff5')};
      }

      .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: #5b166d;
        color: #fffff5;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 0.8rem;
      }
    }
  }
`;

export default function Header({ cartCount }) {
  return (
    <HeaderContainer itemsInCart={cartCount}>
      <h1>Music Sheet Shop</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">
          <div className="cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="40"
              height="40"
              viewBox="0 0 80 80"
            >
              {/* SVG content here */}
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </Link>
      </nav>
    </HeaderContainer>
  );
}
