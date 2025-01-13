import { cardStore } from "../../zustand/cardStore";

export const useMembersHandler = () => {
   const card = cardStore(state => state.card);
   const projetcMembers = cardStore(state => state.projetcMembers);
   const setCardChanges = cardStore(state => state.setCardChanges);
   const cardMembers = card.members;

   function removeMember(memberRemoved){
      const newCardMembers = cardMembers.filter(member => memberRemoved.id != member.id);
      setCardChanges("members", newCardMembers);
   }

   function addMember(memberAdded){
      setCardChanges("members",[...card.members, memberAdded]);
   }

   function findOutMembers(){
      const cardMembersID = cardMembers.map(member => member.id);
      return projetcMembers.filter(member => !cardMembersID.includes(member.id));
   }

   return { removeMember, addMember, findOutMembers };
}