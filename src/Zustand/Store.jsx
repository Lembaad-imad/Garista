import { create } from 'zustand';

const useStore = create((set) => ({
  categorieChosen: 'All',
  products: [],
  records: [],
  selectedLanguage: '',
  filterClicked: false,
  productshop: [],
  navButtons: false, 
  setFilterClicked: (value) => set({ filterClicked: value }),
  setCategorieChosen: (category) => set({ categorieChosen: category }),
  setProducts: (products) => set({ products }),
  setRecords: (newRecords) => set(() => ({ records: newRecords })),
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
  setProductshop: (items) => set({ productshop: items }),
  setNavbuttons: (value) => set({ navButtons: value }), 
}));

export default useStore;
