import { editingCardStore } from "../../zustand/editingCardStore";

export const useMembersHandler = () => {
   const editingCard = editingCardStore(state => state.editingCard);
   const projetcMembers = editingCardStore(state => state.projetcMembers);
   const setCardChanges = editingCardStore(state => state.setCardChanges);
   const cardMembers = editingCard.members;

   function removeMember(removedMember){
      const updatedMembers = cardMembers.filter(member => removedMember.id != member.id);
      setCardChanges("members", updatedMembers);
   }

   function addMember(addedMember){
      setCardChanges("members",[...cardMembers, addedMember]);
   }

   function findOutMembers(){
      const cardMembersID = cardMembers.map(member => member.id);
      return projetcMembers.filter(member => !cardMembersID.includes(member.id));
   }

   return { removeMember, addMember, findOutMembers };
}