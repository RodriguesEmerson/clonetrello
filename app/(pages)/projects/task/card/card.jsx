import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useRef, useState } from 'react';
import { calendarStore } from '../modals/dateModal/calendar/zustand/calendarStore';
import { useEditingCardStore } from "./../zustand/useEditingCardStore";
import { Coments } from "./coments";
import { Content } from "./content";
import { Cover } from "./cover";
import { useCardHandler } from "./hooks/useCardHandler";
import { Labels } from "./labels";
import { Members } from "./mebers";
import { Period } from "./period";

export const Card = ({ card }) => {
   const setEditingCard = useEditingCardStore(state => state.setEditingCard);
   const setIsEditingCard = useEditingCardStore(state => state.setIsEditingCard);
   const setEditingPeriod = calendarStore(state => state.setEditingPeriod);
   const isEditingCard = useEditingCardStore(state => state.isEditingCard);
   const cardRef = useRef(null);
   const { setCardPosition } = useCardHandler();
   //criando função para alterar o estado do card

   const [isEditing, setIsEditing] = useState(false);
   useEffect(() => { 
      !isEditingCard &&
      setIsEditing(false) 
   }, [isEditingCard]);

   if (!card) return <></>;

   return (
      <div
         key={card.key}
         ref={cardRef}
         draggable="true"
         className={`p-1 cursor-grab flex flex-col gap-1 w-full shadow-4xl rounded-md overflow-hidden relative mb-2 hover:outline outline-2 outline-blue-400 ${isEditing && "!outline-none z-10"}`}
         style={{ backgroundColor: `${card.cover.full ? card.cover.color : "white"}` }}
         onDragStart={(e) => { }}
         onDragEnd={(e) => { }}
      >
         <EditIcon
            className='absolute right-1 top-1 !text-center text-gray-500 !text-lg hover:text-gray-900 transition-all'
            onClick={() => {
               setEditingCard(card);
               setEditingPeriod(card.period);
               setIsEditingCard(true);
               setCardPosition(cardRef.current);
               setIsEditing(true);
            }}
         />

         <Cover cover={card.cover} />
         <Labels labels={card.labels} />
         <Content content={card.content} />
         <Members members={card.members} />

         <div className="flex flex-row flex-wrap gap-2 text-xs text-gray-500 items-center">
            <Coments coments={card.coments} />
            <Period 
               card={card}  
            />
         </div>

      </div>
   )
}