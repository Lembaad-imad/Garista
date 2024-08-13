import { create } from 'zustand';

const useStore = create((set) => ({
  categorieChosen: 'All',
  products: [],  
  setCategorieChosen: (category) => set({ categorieChosen: category }),
  setProducts: (products) => set({ products }),
}));
export default useStore;