import { create } from 'zustand';

export const cardStore = create((set) => ({
   card: {
      id: "123", key: "321",
      cover: { full: false, color: "#FFC636", img: false },
      content: "Texto do card!",
      coments: "",
      labels: ["#FFC636", "#04D99D"],
      members: [
         { name: "User-1", img: "/images/profile-1.png", id: "123" },
         { name: "User-2", img: "/images/profile-2.png", id: "456" }
      ],
      period: { start: "2025/01/11", end: "2025/01/20", done: false }
   },
   projetcMembers: [
      {name: "User-1", img: "/images/profile-1.png", id: "123"},
      {name: "User-2", img: "/images/profile-2.png", id: "456"},
      {name: "User-3", img: "/images/profile-3.png", id: "789"},
   ],
   setCardChanges: (atributte, value) => set((state) =>
   ({
      card: {
         ...state.card, [atributte]: value
      }
   })
   )

}))