import cartReducer, { addItemToCart, removeItemFromCart } from './cartSlice';

describe('cartSlice', () => {
  const initialState = {
    items: [],
  };

  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle adding an item to the cart', () => {
    const previousState = { items: [] };
    const newItem = { id: 1, name: 'Test Product', price: 10.99 };

    expect(cartReducer(previousState, addItemToCart(newItem))).toEqual({
      items: [newItem],
    });
  });

  it('should handle removing an item from the cart', () => {
    const previousState = {
      items: [{ id: 1, name: 'Test Product', price: 10.99 }],
    };

    expect(cartReducer(previousState, removeItemFromCart(1))).toEqual({
      items: [],
    });
  });

  it('should not remove an item if the id does not match', () => {
    const previousState = {
      items: [{ id: 1, name: 'Test Product', price: 10.99 }],
    };

    expect(cartReducer(previousState, removeItemFromCart(2))).toEqual({
      items: [{ id: 1, name: 'Test Product', price: 10.99 }],
    });
  });
});