import styled from '@emotion/styled';

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

export default function TextInput({ type = 'text', ...props }) {
  return <Input type={type} {...props} />;
}
