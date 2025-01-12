import EditIcon from '@mui/icons-material/Edit';
import { Cover } from "./cover";
import { Labels } from "./labels";
import { Members } from "./mebers";
import { Content } from "./content";

export const Card = () => {

   const cardInfos = {
      id: "123", key: "321",
      capa: {full: false, color: "#b9f1f9",img: false}, 
      content: "Texto do card!",
      coments: "", labels: ["#F3D3F4", "#D3D4D4"],
      members:[
         {name:"User-1", img: "/images/profile-1.png"},
         {name:"User-2", img: "/images/profile-2.png"}
      ]
      
   }
   const isEditingCard = false;
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

         <EditIcon className='absolute right-1 top-1 !text-center text-gray-500 !text-lg hover:text-gray-900 transition-all' />
         <Cover cardInfos={cardInfos} />
         <Labels labels={cardInfos.labels} />
         <Content content={cardInfos.content}/>
         <Members members={cardInfos.members} />
         {
            (<div className="flex flex-row flex-wrap gap-2 text-xs text-gray-500 items-center">
               {cardInfos.coments.length > 0 &&
                  <div className="h-4 flex flex-row items-center gap-1">
                     <span className="material-icons !text-lg scale-90 -mt-[2px]">chat</span>
                     <p>{cardInfos.coments.length}</p>
                  </div>
               }
               {
                  // <PeriodoCard 
                  //    periodo={cardInfos.periodo} 
                  //    cardInfos={cardInfos} 
                  //    setCardInfos={setCardInfos}
                  // />
               }
               
            </div>)
         }
      </div>
   )
}