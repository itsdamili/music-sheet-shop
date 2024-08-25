import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton Component', () => {
  it('renders the button with text', () => {
    render(<PrimaryButton>Click Me</PrimaryButton>);
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<PrimaryButton onClick={handleClick}>Click Me</PrimaryButton>);
    fireEvent.click(screen.getByText(/Click Me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('displays the button in disabled state', () => {
    render(<PrimaryButton disabled>Click Me</PrimaryButton>);
    expect(screen.getByText(/Click Me/i)).toBeDisabled();
  });
});
