import { create } from 'zustand';

export const useEditingCardStore = create((set) => ({
   editingCard:  false,
   setEditingCard: (card) => set( 
      { editingCard: card }
   )
}))