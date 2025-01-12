import { create } from "zustand";

export const hiddenModalsStore = create((set) => ({
   isHidden: {
      labels: true,
      members: true,
      cover: true,
      date: true,
      move: true,
      copy: true,
   },
   setShowModal: (modal, status) => set((state) => ({
      isHidden: {
         ...state.isHidden,
         [modal]: status,
      },
   })),
   setHiddenAllModals: () => set((state) => ({
      isHidden: {
         labels: true,
         members: true,
         cover: true,
         date: true,
         move: true,
         copy: true,
      }
   }))

}))