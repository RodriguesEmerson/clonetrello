import { cardStore } from "../../zustand/cardStore";

export const useMembersHandler = () => {
   const card = cardStore(state => state.card);
   const projetcMembers = cardStore(state => state.projetcMembers);
   const setCardChanges = cardStore(state => state.setCardChanges);
   const cardMembers = card.members;

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