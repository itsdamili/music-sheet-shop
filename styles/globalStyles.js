// styles/globalStyles.js
import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #fffff5;
    color: #1c1c1b;
    padding: 20px;
    line-height: 1.6;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #5b166d;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  nav {
    background-color: #1c1c1b;
    color: #fffff5;
    padding: 10px;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  nav a {
    margin: 0 15px;
    font-weight: bold;
    font-size: 1.1rem;
  }

  nav a:hover {
    color: #ccac00;
  }
`;
