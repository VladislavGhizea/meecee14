import { create } from "zustand";

interface StoreState {
  deltaX: number;
  setDeltaX: (deltaX: number) => void;
}

const useStoreHome = create<StoreState>((set) => ({
  deltaX: 0,
  setDeltaX: (deltaX) => set({ deltaX }),
}));

export default useStoreHome;
