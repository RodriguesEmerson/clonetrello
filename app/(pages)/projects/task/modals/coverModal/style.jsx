import { cardStore } from "../../zustand/cardStore";


export const Style = () => {
   const card = cardStore(state => state.card);
   const setCardChanges = cardStore(state => state.setCardChanges);
   const cover = card.cover;

   if (!card) return <></>;

   return (
      <div className="text-xs">
         <p className="font-semibold mb-1">Tamanho</p>
         <div className="flex justify-between gap-[2px]">
            <div className={`w-[49%] rounded-md cursor-pointer p-[2px]
               ${(!cover.full && !cover.img && cover?.color) ? "outline outline-[3px] outline-blue-500" : ''}`}
               onClick={() => { setCardChanges("cover",{ color: cover.color, full: false, img: "" }) }}
            >
               <div className="h-7 rounded-t-[4px]"
                  style={{ backgroundColor: cover?.color ? `${cover.color}` : "lightgray" }}
               >
               </div>
               <div className=" flex flex-col gap-1 p-1 mt-1">
                  <span className="rounded-md h-1 w-full bg-gray-400 block"></span>
                  <span className="rounded-md h-1 w-3/4 bg-gray-400 block"></span>
                  <div className="flex justify-between items-center">
                     <div className="flex w-2/5 h-4 gap-1 items-center">
                        <span className="rounded-md h-1 w-full bg-gray-400 block"></span>
                        <span className="rounded-md h-1 w-full bg-gray-400 block"></span>
                     </div>
                     <span className="rounded-full h-3 w-3 bg-gray-400 block"></span>
                  </div>
               </div>
            </div>
            <div className={`w-[49%]  rounded-[4px] overflow-hidden cursor-pointer p-[2px]
               ${(cover.full && !cover.img && cover?.color) ? "outline outline-[3px] outline-blue-500" : ''}`}
               onClick={() => { setCardChanges("cover",{ color: cover.color, full: true, img: "" }) }}
            >
               <div className="h-full p-1 rounded-[4px]"
                  style={{ backgroundColor: cover?.color ? `${cover?.color}` : "lightgray" }}
               >
                  <span className="rounded-md mb-1 mt-12 h-1 w-full bg-gray-500 block"></span>
                  <span className="rounded-md h-1 w-3/4 bg-gray-500 block"></span>
               </div>
            </div>
         </div>
      </div>
   )
}