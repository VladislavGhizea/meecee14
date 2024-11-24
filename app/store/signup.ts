import { create } from "zustand";
const inputs: string[] = [
  "Username",
  "Email",
  "Password",
  "Nome",
  "Cognome",
  "Codice Fiscale",
  "Indirizzo",
  "CAP",
  "Città",
];
interface StoreState {
  progress: number;
  role: "owner" | "user" | "";
  inputValues: string[];
  index: number;
  setIndex: (index: number) => void;
  setProgress: (progress: number) => void;
  setRole: (role: "owner" | "user" | "") => void;
  setInputValues: (inputValues: string[]) => void;
  reset: () => void;
}
const initialState: Omit<
  StoreState,
  "setIndex" | "setProgress" | "setRole" | "setInputValues" | "reset"
> = {
  progress: 0,
  role: "",
  inputValues: Array(inputs.length).fill(""),
  index: 0,
};
const useStore = create<StoreState>((set) => ({
  ...initialState,
  setIndex: (index: number) => set({ index }),
  setProgress: (progress: number) => set({ progress }),
  setRole: (role: "owner" | "user" | "") => set({ role }),
  setInputValues: (inputValues: string[]) => set({ inputValues }),
  reset: () => set(() => initialState),
}));
export default useStore;
