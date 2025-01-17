import { create } from "zustand";

export const calendarStore = create((set) => ({
   editingPeriod: {},
   selectedMonth: 1,
   selectedYear: 2025,
   setEditingPeriod: (period) => set(() => ({
      editingPeriod: period
   })),
   setSelectedMonth: (month) => set(() => ({
      selectedMonth: month
   })),
   setSelectedYear: (year) => set(() => ({
      selectedYear: year
   }))


}))