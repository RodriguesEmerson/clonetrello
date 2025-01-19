'use client';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { editingCardStore } from "../zustand/editingCardStore";
import ModalBox from "./boxModal";
import { useMembersHandler } from "./hooks/useMembersHandler";

export const MembersModal = () => {
   const editingCard = editingCardStore(state => state.editingCard);
   const { removeMember, addMember, findOutMembers } = useMembersHandler();
   
   const cardMembers = editingCard.members;
   const outMembers = findOutMembers();

   return (
      <ModalBox modalName={'Alterar Membros'} >
         {(!cardMembers || cardMembers.length === 0) ? <></> :
            <div>
               <p className="text-xs font-semibold pb-1">Membros do Cartão</p>
               <ul className="flex flex-col gap-1">
                  {cardMembers.map(member => (
                     <Member 
                        key={member.id}
                        member={member} 
                        memberType={"cardMember"} 
                        onClick={() => {removeMember(member)}}
                     />
                  ))}
               </ul>
            </div>
         }
         {(!outMembers || outMembers.length === 0) ? <></> :
            <div>
               <p className="text-xs font-semibold pb-1 mt-4">Membros do Projeto</p>
               <ul className="flex flex-col gap-1">
                  {outMembers.map(member => (
                     <Member 
                        key={member.id}
                        member={member} 
                        memberType={"outMember"} 
                        onClick={() => {addMember(member)}}
                     />
                  ))}
               </ul>
            </div>
         }
      </ModalBox>
   )
}

const Member = ({member, memberType, ...props}) => {
   return (
      <li 
         className="relative flex items-center justify-between gap-2 w-full p-1 px-2 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all rounded-sm"
         title={`Remover ${member.name}`}
         {...props}
      >
         <div className=" flex flex-row items-center gap-1">
            <div key={member.name} className="h-7 w-7 rounded-full bg-gray-600 overflow-hidden">
               <img src={member.img} className="max-w-full object-cover"></img>
            </div>
            <p className="text-sm">{member.name}</p>
         </div>
         {(memberType == "cardMember")
            ? <AddIcon className="text-base" />
            : <RemoveIcon className="text-base" />
         }
      </li>
   )
}