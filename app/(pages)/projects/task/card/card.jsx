import EditIcon from '@mui/icons-material/Edit';
import { Cover } from "./cover";
import { Labels } from "./labels";
import { Members } from "./mebers";
import { Content } from "./content";
import { Coments } from "./coments";
import { Period } from "./period";
import { useEditingCardStore } from "./../zustand/useEditingCardStore"

export const Card = () => {
   const setEditingCard = useEditingCardStore(state => state.setEditingCard);
   const editingCard = useEditingCardStore(state => state.editingCard);

   const cardInfos = {
      id: "123", key: "321",
      capa: { full: false, color: "#b9f1f9", img: false },
      content: "Texto do card!",
      coments: "", labels: ["#F3D3F4", "#D3D4D4"],
      members: [
         { name: "User-1", img: "/images/profile-1.png" },
         { name: "User-2", img: "/images/profile-2.png" }
      ],
      period: { start: "2025/01/11", end: "2025/01/20", done: false }
   }

   const isEditingCard = !!editingCard;
   const hiddenOptionsModal = false;
   return (
      <div
         key={cardInfos.key}  
         draggable="true"
         className={`p-1 cursor-grab flex flex-col gap-1 w-full shadow-4xl 
            rounded-md overflow-hidden relative mb-2 hover:outline outline-2 outline-blue-400 ${!hiddenOptionsModal && "!outline-none"} ${!isEditingCard && "card-hovering"}`}
         style={{ backgroundColor: `${cardInfos.capa.full ? cardInfos.capa.color : "white"}` }}
         onDragStart={(e) => { }}
         onDragEnd={(e) => { }}
      >

         <EditIcon 
            className='absolute right-1 top-1 !text-center text-gray-500 !text-lg hover:text-gray-900 transition-all' 
            onClick = {() => setEditingCard(cardInfos)}
         />
         <Cover cardInfos={cardInfos} />
         <Labels labels={cardInfos.labels} />
         <Content content={cardInfos.content} />
         <Members members={cardInfos.members} />

         <div className="flex flex-row flex-wrap gap-2 text-xs text-gray-500 items-center">
            <Coments coments={cardInfos.coments} />
            <Period period={cardInfos.period} />
         </div>

      </div>
   )
}