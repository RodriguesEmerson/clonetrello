import { editingCardStore } from "../../zustand/editingCardStore";

export const useLabelsHandler = () => {
   const editingCard = editingCardStore(state => state.editingCard);
   const setCardChanges = editingCardStore(state => state.setCardChanges);

   function labelsHandler(label){
      if(editingCard.labels.includes(label)){
         const labels = editingCard.labels.filter((currLabel) => currLabel != label);
         setCardChanges("labels", labels)
         return;
      }
      setCardChanges("labels", [...editingCard.labels, label])
   }

   return { labelsHandler }
}