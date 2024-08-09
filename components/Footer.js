// components/Footer.js
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #1c1c1b;
  color: #fffff5;
  text-align: center;
  padding: 20px;
  bottom: 0;
  width: 100%;
  font-size: 1rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      Designed by Milad Azizi
    </FooterContainer>
  );
}
