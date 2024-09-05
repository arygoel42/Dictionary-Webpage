import create from "zustand";


const useGlobalStore = create((set) => ({
    word: "", // initial state
    setWord: (newWord: string) => set({ word: newWord }), // action to update the state
    resetState: () => set({ word: "" }),
  }));
  
  export default useGlobalStore;