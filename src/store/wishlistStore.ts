import { create } from 'zustand';
import { Product } from '../types';

interface WishlistStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  addItem: (product) => {
    set((state) => ({
      items: [...state.items, product],
    }));
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },
  isInWishlist: (productId) => {
    return get().items.some((item) => item.id === productId);
  },
}));