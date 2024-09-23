import { create } from 'zustand';

interface NavbarState {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  activeItem: '',
  setActiveItem: (item) => set({ activeItem: item }),
}));

