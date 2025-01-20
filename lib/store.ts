import { create } from 'zustand';

interface NavbarStore {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const useNavbarStore = create<NavbarStore>((set) => ({
  activeItem: '',
  setActiveItem: (item) => set({ activeItem: item }),
}));

