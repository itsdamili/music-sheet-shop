// components/Footer.js
import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #1c1c1b;
  color: #fffff5;
  padding: 20px;
  text-align: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const SocialLinks = styled.div`
  margin: 10px 0;

  a {
    color: #ccac00;
    margin: 0 10px;
    font-size: 1.5rem;
    text-decoration: none;
  }

  a:hover {
    color: #ffcc00;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Sheet Music Shop. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
