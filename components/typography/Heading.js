import styled from '@emotion/styled';

const StyledHeading = styled.h1`
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: #1c1c1b;
  margin: 0;
`;

export default function Heading({ level = 1, children, ...props }) {
  const Tag = `h${level}`;
  return <Tag as={StyledHeading} {...props}>{children}</Tag>;
}
