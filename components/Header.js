import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeaderContainer = styled.header`
  padding: 20px;
  color: #fffff5;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

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
        fill: ${(props) => (props.itemsInCart > 0 ? '#186f22' : '#fffff5')};
        transition: fill 0.3s;
      }

      .cart-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: #186f22;
        color: #fffff5;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 0.8rem;
      }
    }
  }
`;

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cartItems.length);
    };

    updateCartCount();

    window.addEventListener('cartUpdate', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdate', updateCartCount);
    };
  }, []);

  return (
    <HeaderContainer itemsInCart={cartCount}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">
          <div className="cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 256 256"
            >
              <g transform="translate(1.406 1.406) scale(2.81 2.81)">
                <path d="M 73.713 65.44 H 27.689 c -3.566 0 -6.377 -2.578 -6.686 -6.13 c -0.21 -2.426 0.807 -4.605 2.592 -5.939 L 16.381 21.07 c -0.199 -0.889 0.017 -1.819 0.586 -2.53 s 1.431 -1.124 2.341 -1.124 H 87 c 0.972 0 1.884 0.471 2.446 1.263 c 0.563 0.792 0.706 1.808 0.386 2.725 l -7.798 22.344 c -1.091 3.13 -3.798 5.429 -7.063 5.999 l -47.389 8.281 c -0.011 0.001 -0.021 0.003 -0.032 0.005 c -0.228 0.04 -0.623 0.126 -0.568 0.759 c 0.056 0.648 0.48 0.648 0.708 0.648 h 46.024 c 1.657 0 3 1.343 3 3 S 75.37 65.44 73.713 65.44 z" />
                <circle cx="28.25" cy="75.8" r="6.5" />
                <circle cx="68.29" cy="75.8" r="6.5" />
                <path d="M 19.306 23.417 c -1.374 0 -2.613 -0.95 -2.925 -2.347 l -1.375 -6.155 c -0.554 -2.48 -2.716 -4.212 -5.258 -4.212 H 3 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 6.749 c 5.372 0 9.942 3.662 11.113 8.904 l 1.375 6.155 c 0.361 1.617 -0.657 3.221 -2.274 3.582 C 19.742 23.393 19.522 23.417 19.306 23.417 z" />
              </g>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </Link>
      </nav>
    </HeaderContainer>
  );
}
