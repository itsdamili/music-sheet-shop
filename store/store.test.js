import { store } from '../store/store';
import { addItemToCart, removeItemFromCart } from '../slices/cartSlice';

describe('Redux Store', () => {
  it('should initialize with an empty cart', () => {
    const state = store.getState();
    expect(state.cart.items).toEqual([]);
  });

  it('should add an item to the cart', () => {
    const newItem = { id: 1, name: 'Test Product', price: 10.99 };
    store.dispatch(addItemToCart(newItem));
    const state = store.getState();
    expect(state.cart.items).toEqual([newItem]);
  });

  it('should remove an item from the cart', () => {
    store.dispatch(removeItemFromCart(1));
    const state = store.getState();
    expect(state.cart.items).toEqual([]);
  });
});
