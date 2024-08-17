import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #5b166d;
  color: #fffff5;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ccac00;
  }
`;

export default function RemoveButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
