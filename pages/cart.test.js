import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Cart from './cart';
import { addItemToCart, removeItemFromCart } from '../slices/cartSlice';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  }),
}));

const renderWithProvider = (component) => {
  return render(<Provider store={store}>{component}</Provider>);
};

beforeEach(() => {
  store.dispatch(removeItemFromCart({ id: 1 }));
  store.dispatch(addItemToCart({ id: 1, name: 'Test Product', price: 10.99 }));
});

describe('Cart Component', () => {
  it('renders cart with items', () => {
    renderWithProvider(<Cart />);
    expect(screen.getByText(/Your Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10.99/i)).toBeInTheDocument();
  });

  it('removes item from cart on button click', () => {
    renderWithProvider(<Cart />);
    
    const removeButtons = screen.getAllByText(/Remove/i);
    
    if (removeButtons.length > 1) {
      fireEvent.click(removeButtons[0]); 
    } else {
      fireEvent.click(removeButtons[0]); 
    }

    expect(screen.queryByText(/Test Product/i)).not.toBeInTheDocument();
  });

  it('shows proceed to checkout button only when there are items', () => {
    renderWithProvider(<Cart />);
    
    expect(screen.getByText(/Proceed to Checkout/i)).toBeInTheDocument();
    
    fireEvent.click(screen.getByText(/Remove/i));
    
    expect(screen.queryByText(/Proceed to Checkout/i)).not.toBeInTheDocument();
  });
});