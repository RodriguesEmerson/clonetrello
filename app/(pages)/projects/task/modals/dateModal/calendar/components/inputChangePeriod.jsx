import React, { useEffect, useState } from 'react';
import { calendarStore } from '../zustand/calendarStore';
import { useDateHandler } from '../../../hooks/useDateHandler';

export const InputChangePeriod = ({ title, type, ...rest }) => {
   const [checked, setChecked] = useState(false);
   const [inputValue, setInputValue] = useState('');
   const editingPeriod = calendarStore(state => state.editingPeriod);
   const insertDateType = calendarStore(state => state.insertDateType);
   const setInsertDateType = calendarStore(state => state.setInsertDateType);

   const { 
      today, 
      convertDateFormat, 
      removePeriodDate, 
      addPeriodDate, 
   } = useDateHandler();

   useEffect(() => { 
      if(editingPeriod[type]) {
         setChecked(true);
      }
      setInputValue(editingPeriod?.[type] ?
         new Date(editingPeriod[type]).toLocaleDateString("pt-BR", {day: '2-digit', month: '2-digit', year: 'numeric'}) 
         : "");
   }, [editingPeriod]);

   return (
      <div className="text-xs mb-2">
         <p className="font-semibold mb-1 text-gray-600">{title}</p>
         <div className="flex items-center gap-[6px] mb-3">
            <input
               type="checkbox"
               className="w-[18px] h-[18px]"
               checked={checked ? true : false}
               onChange={(e) => {
                  !e.target.checked
                     ? removePeriodDate(type)
                     : addPeriodDate(today(), type);
                  !checked &&  setInsertDateType(type);
                  setChecked(!checked);
               }}
            />
            <input
               type="text"
               className={`w-[100px] h-8 border border-gray-400 rounded-[3px] pl-2 focus-within:outline-[3px] focus-within:outline-blue-400 
                  ${!checked && "bg-gray-200 border-none"}
                  ${(checked && insertDateType === type) && ("border-none !outline !outline-blue-400")}
               `}
               placeholder="dd/mm/aaaa"
               disabled={!checked ? true : false}
               value={inputValue}
               autoFocus={insertDateType === type}
               onClick={() => {setInsertDateType(type)}}
               onChange={(e) => { setInputValue(e.target.value) }}
               onKeyDown={(e) => { (e.key == "Enter") && addPeriodDate(convertDateFormat(inputValue, "js"), type) }}
            />
         </div>
      </div>
   );
};
