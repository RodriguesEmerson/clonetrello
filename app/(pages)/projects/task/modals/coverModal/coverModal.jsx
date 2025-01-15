import ModalBox from "../boxModal";
import { Style } from "./style";
import { Colors } from "./colors";
import { Images } from "./images";
import { cardStore } from "../../zustand/cardStore";

export function CoverModal() {
   const setCardChanges = cardStore(state => state.setCardChanges);

   return (
      <ModalBox modalName={'Capa'}>
         <div className="flex flex-col gap-2 p-1">
            <Style />
            <input type="button" value="Remover Capa"
               className="bg-gray-200 text-[13px] font-semibold w-full 
                           rounded-sm h-8 cursor-pointer hover:bg-gray-300 transition-all"
               onClick={() => {setCardChanges("cover", { full: false, color: false, img: false })}}
            ></input>
            <Colors />
            <Images />
         </div>
      </ModalBox>
   )
}
