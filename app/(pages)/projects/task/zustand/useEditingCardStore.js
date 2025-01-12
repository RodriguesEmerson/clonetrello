import { create } from 'zustand';

export const useEditingCardStore = create((set) => ({
   editingCard:  false,
   isEditingCard: false,
   editingCardPosition: {top: 0, left: 220},
   setEditingCard: (card) => set( 
      { editingCard: card }
   ),
   setIsEditingCard: (status) => set(
      {isEditingCard: status}
   ),
   setEditingCardPosition: (position) => set(
      {editingCardPosition: position}
   )
}))