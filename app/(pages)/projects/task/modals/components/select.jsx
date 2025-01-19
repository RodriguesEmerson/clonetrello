import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { calendarStore } from "../dateModal/calendar/zustand/calendarStore";

export const Select = ({ optionList, option, width, action }) => {
   const [showOptions, setShowOptions] = useState(false);
   const [currentOption, setCurrentOption] = useState(option);

   if(!currentOption) return <></>

   return (
      <div
         className={`flex items-center text-xs gap-[6px] mb-1 relative border border-gray-400 rounded-[3px] pl-2 pr-1 h-9 cursor-pointer justify-between ${showOptions && "!border !border-blue-500 outline outline-1 outline-blue-500"}`}
         style={{ width: width }}
         onClick={() => setShowOptions(!showOptions)}
      >
         <input 
            type="text" 
            className="cursor-default w-full h-full bg-transparent border-none focus:outline-none"
            readOnly
            value={currentOption}
         />
         {/* {showOptions && */}
         <ul className={`${showOptions ? `h-[${32 + (32 * optionList.length)}px]` : "h-0 !p-0 !border-none"} overflow-hidden transition-all border text-[13px] border-gray-200 py-2 -ml-2 absolute rounded-md bg-white bottom-9 w-full shadow-md`}>
            {/* {typeof (optionList[0]) == "object" 
                  optionList.map(element => (
                     <li key={`slM${element.listId}`} className="option-modal-data relative h-8 leading-7 pl-2 cursor-pointer hover:bg-gray-100 "
                        onClick={() => { setOptions(element) }}
                     >
                        <span className={`w-[3px] h-full ${option == element[chave] ? "block" : "hidden"} bg-blue-500 absolute left-0 top-0 -m-[1px]`}></span>
                        <p>{element[chave]}</p>
                     </li>
                  )) 
               */}
            {optionList.map(item => (
               <li key={`ilM${item}`} className="option-modal-data relative h-8 leading-8 pl-2 cursor-pointer hover:bg-gray-100 "
                  onClick={() => { setCurrentOption(item); action(item) }}
               >
                  <span className={`w-[3px] h-full transition-all ${currentOption == item ? "block" : "hidden"} bg-blue-500 absolute left-0 top-0 -m-[1px]`}></span>
                  <p>{item}</p>
               </li>
            ))}

         </ul>
         {/* //  }  */}
         <KeyboardArrowDownIcon className={`!text-base transition-all rotate-180 ${showOptions && "!rotate-0"}`} />
      </div>
   )
}