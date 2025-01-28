import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: number, size: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product, size) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id && item.selectedSize === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1, selectedSize: size }],
      };
    });
  },
  removeItem: (productId, size) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === productId && item.selectedSize === size)
      ),
    }));
  },
  updateQuantity: (productId, size, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      ),
    }));
  },
  clearCart: () => set({ items: [] }),
  total: () => {
    const items = get().items;
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));