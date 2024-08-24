export async function fetchProducts() {
    try {
      const response = await fetch('https://66c589e2134eb8f434949cf9.mockapi.io/item');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      return [];
    }
  }
  