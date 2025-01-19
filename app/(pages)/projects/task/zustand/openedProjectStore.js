import create from 'zustand';

export const openedProjectStore = create((set) => ({
   openedProject: null,
   setOpenedProject: (project) => set({ openedProject: project }),
   clearOpenedProject: () => set({ openedProject: null }),
}));
