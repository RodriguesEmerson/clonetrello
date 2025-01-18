import { create } from "zustand";

export const calendarStore = create((set) => ({
   editingPeriod: {},
   selectedMonth: 1,
   selectedYear: 2025,
   insertDateType: "start",
   setInsertDateType: (type) => set(() => ({
      insertDateType: type
   })),
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