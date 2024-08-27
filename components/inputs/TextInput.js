import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextInput = ({ as = 'input', ...props }) => {
  return as === 'textarea' ? <StyledTextarea {...props} /> : <StyledInput {...props} />;
};

export default TextInput;
