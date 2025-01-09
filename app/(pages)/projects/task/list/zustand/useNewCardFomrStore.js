import { create } from 'zustand';

export const useNewCardFormStore = create((set) => ({
   showingForm: false,
   setShowingForm: (status) => set( 
      { showingForm: status }
   )
}))