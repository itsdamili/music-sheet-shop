import styled from '@emotion/styled';

const StyledParagraph = styled.p`
  font-family: 'Georgia', serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #1c1c1b;
  margin: 0 0 1em;
`;

export default function Paragraph({ children, ...props }) {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
}
