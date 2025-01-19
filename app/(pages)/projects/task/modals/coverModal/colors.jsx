import { editingCardStore } from "../../zustand/editingCardStore";

const availableColors = [
   { color: '#FFC636' },
   { color: '#FF6444' },
   { color: '#00ADA9' },
   { color: '#260273' },
   { color: '#04D99D' },
   { color: '#F205CB' },
   { color: '#7C05F2' },
   { color: '#FEA362' },
   { color: '#94C748' },
   { color: '#8590A2' },
]

export const Colors = () => {
   const editingCard = editingCardStore(state => state.editingCard);
   const setCardChanges = editingCardStore(state => state.setCardChanges);
   
   if(!editingCard) return <></>;

   return (
      <div className="text-xs mb-2">
         <p className="font-semibold mb-1">Cores</p>
         <div className="flex gap-[6px] flex-wrap w-full">
            {availableColors.map(color => (
               <div key={`capa${color.color}`}
                  className={`h-9 w-[18%] rounded-[3px] cursor-pointer p-[1px]
                  ${editingCard.cover?.color == color.color && "outline outline-[3px] outline-blue-500"}`}
                  onClick={() => setCardChanges("cover",{ color: `${color.color}`, full: editingCard.cover.full, img: "" })}
               >
                  <span className={`h-full w-full block rounded-[3px]`}
                     style={{ backgroundColor: color.color }}
                  >
                  </span>
               </div>
            ))}
         </div>
      </div>
   )
}