import { cardStore } from "../../zustand/cardStore";

const availablesImages = [
   "/images/bg-img-1.jpg", "/images/bg-img-2.jpg", "/images/bg-img-3.jpg",
   "/images/bg-img-4.jpg", "/images/bg-img-5.jpg", "/images/bg-img-6.jpg",
   "/images/bg-img-7.jpg", "/images/bg-img-8.jpg", "/images/bg-img-9.jpg",
]

export const Images = () => {
   const setCardChanges = cardStore(state => state.setCardChanges);

   return (
      <div className="text-xs mb-2">
         <p className="font-semibold mb-1">Imagens</p>
         <div className="flex justify-between gap-[6px] flex-wrap w-full">
            {availablesImages.map(image => (
               <div key={`imgSC${image}`}
                  className="flex-1 min-w-[30%] h-11 bg-black overflow-hidden rounded-sm cursor-pointer"
                  onClick={() => setCardChanges("cover",{ color: "", full: false, img: `${image}` })}
               >
                  <img src={`${image}`} className="w-full h-full object-cover hover:opacity-60 transition-all"></img>
               </div>
            ))}
         </div>
      </div>
   )
}