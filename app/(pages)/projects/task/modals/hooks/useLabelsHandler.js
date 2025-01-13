import { cardStore } from "../../zustand/cardStore";

export const useLabelsHandler = () => {
   const card = cardStore(state => state.card);
   const setCardChanges = cardStore(state => state.setCardChanges);

   function labelsHandler(label){
      if(card.labels.includes(label)){
         const labels = card.labels.filter((currLabel) => currLabel != label);
         setCardChanges("labels", labels)
         return;
      }
      setCardChanges("labels", [...card.labels, label])
   }

   return { labelsHandler }
}