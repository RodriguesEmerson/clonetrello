'use client'

import { useDateHandler } from "../../modals/hooks/useDateHandler";
import { useEditingCardStore } from "../../zustand/useEditingCardStore";

export const useCardHandler = () => {
   const setEditingCardPosition = useEditingCardStore(state => state.setEditingCardPosition);
   const {today} = useDateHandler();

   function setCardPosition(card){
      const cardLeft = card.offsetLeft;
      const cardTop = card.offsetTop;
      const cardWidth = card.offsetWidth;

      setEditingCardPosition({top: cardTop, left: cardLeft + cardWidth + 5})
   }

   function getPeriodColor(period){

      const endDate = new Date(period.end).getTime();
      if(period.done) return "#046C4E";
      if(new Date(today()).getTime() > endDate) return "#C81E1E";
      if(new Date(today()).getTime() === endDate) return "#FACA15";
      
   }

   return { setCardPosition, getPeriodColor }
}