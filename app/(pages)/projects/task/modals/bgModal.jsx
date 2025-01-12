import { useEditingCardStore } from "../zustand/useEditingCardStore";


export const BgModal = ({ children }) => {

   const setIsEditingCard = useEditingCardStore(state => state.setIsEditingCard);
   const setEditingCard = useEditingCardStore(state => state.setEditingCard);

   return (
      <div
         className="absolute top-0 left-0 w-full h-[100vh] bg-[#00000080]"
         onClick={(e) => { 
            if(e.target.closest(".modal")) return;
            setEditingCard(false); setIsEditingCard(false) 
         }}
      >
         {children}
      </div>
   )
}