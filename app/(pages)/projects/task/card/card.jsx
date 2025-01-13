import EditIcon from '@mui/icons-material/Edit';
import { Cover } from "./cover";
import { Labels } from "./labels";
import { Members } from "./mebers";
import { Content } from "./content";
import { Coments } from "./coments";
import { Period } from "./period";
import { useEditingCardStore } from "./../zustand/useEditingCardStore";
import { cardStore } from "./../zustand/cardStore";
import { useCardHandler } from "./hooks/useCardHandler";
import { useRef } from 'react';

export const Card = () => {
   const card = cardStore(state => state.card);
   
   const setEditingCard = useEditingCardStore(state => state.setEditingCard);
   const setIsEditingCard = useEditingCardStore(state => state.setIsEditingCard);
   const isEditingCard = useEditingCardStore(state => state.isEditingCard);
   const cardRef = useRef(null);
   const { setCardPosition } = useCardHandler();

   if(!card) return <></>

   return (
      <div
         key={card.key}
         ref={cardRef}
         draggable="true"
         className={`p-1 cursor-grab flex flex-col gap-1 w-full shadow-4xl rounded-md overflow-hidden relative mb-2 hover:outline outline-2 outline-blue-400 ${isEditingCard && "!outline-none z-10"}`}
         style={{ backgroundColor: `${card.cover.full ? card.cover.color : "white"}` }}
         onDragStart={(e) => { }}
         onDragEnd={(e) => { }}
      >

         <EditIcon 
            className='absolute right-1 top-1 !text-center text-gray-500 !text-lg hover:text-gray-900 transition-all' 
            onClick = {() => {
               setEditingCard(card);
               setIsEditingCard(true);
               setCardPosition(cardRef.current)
            }}
         />
         <Cover cover={card.cover} />
         <Labels labels={card.labels} />
         <Content content={card.content} />
         <Members members={card.members} />

         <div className="flex flex-row flex-wrap gap-2 text-xs text-gray-500 items-center">
            <Coments coments={card.coments} />
            <Period period={card.period} />
         </div>

      </div>
   )
}