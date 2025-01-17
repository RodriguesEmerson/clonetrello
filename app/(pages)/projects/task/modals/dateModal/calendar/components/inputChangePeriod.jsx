import React, { useState } from 'react';

export const InputChangePeriod = ({ title, ...rest }) => {
   const [checked, setChecked] = useState(false);
   return (
      <div className="text-xs mb-2">
         <p className="font-semibold mb-1 text-gray-600">{title}</p>
         <div className="flex items-center gap-[6px] mb-3">
            <input
               type="checkbox"
               className="w-[18px] h-[18px]"
               checked={checked ? true : false}
               onChange={(e) => {
                  // !e.target.checked
                  //    ? datesHandler.handleStartDate(startDate, endDate, true)
                  //    : datesHandler.handleStartDate(datesHandler.today(), endDate, false);
                  setChecked(!checked);
               }}
            />
            <input
               type="text"
               className={`w-[100px] h-8 border border-gray-400 rounded-[3px] pl-2 focus-within:outline-[3px]  focus-within:outline-blue-400 
                  ${!checked && "bg-gray-200 border-none"} 
                  ${(checked) && ("border-none !outline !outline-blue-400")}
               `}
               placeholder="dd/mm/aaaa"
               disabled={!checked ? true : false}
               defaultValue={'startDate'}
               onClick={() => setDateType(true)}
               onChange={(e) => { setStartDate(e.target.value) }}
               onKeyDown={(e) => {  }}

            />
         </div>
      </div>
   );
};
