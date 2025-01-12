'use client'

import { useEditingCardStore } from "../../zustand/useEditingCardStore";

export const useCardHandler = () => {
   const setEditingCardPosition = useEditingCardStore(state => state.setEditingCardPosition);

   function setCardPosition(card){
      const cardLeft = card.offsetLeft;
      const cardTop = card.offsetTop;
      const cardWidth = card.offsetWidth;

      setEditingCardPosition({top: cardTop, left: cardLeft + cardWidth + 5})
   }

   return { setCardPosition }
}