import { create } from 'zustand';

const useStore = create((set) => ({
  categorieChosen: 'All',
  products: [],  
  selectedLanguage: '',
  setCategorieChosen: (category) => set({ categorieChosen: category }),
  setProducts: (products) => set({ products }),
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
}));
export default useStore;