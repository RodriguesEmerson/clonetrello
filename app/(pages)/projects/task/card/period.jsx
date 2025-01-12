import { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const Period = ({ period }) => {
   if (!period.start && !period.end) return <></>;

   const startDate = new Date(period.start).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' });
   const endDate = new Date(period.end).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' });

   const [hovering, setHovering] = useState(false);
   function handleMouseOut(e) {
      // Verifica se o cursor realmente saiu do elemento pai e não apenas foi para um filho.
      if (!e.currentTarget.contains(e.relatedTarget)) {
         setHovering(false)
      }
   }

   return (
      <div
         className={`h-6 flex flex-row items-center gap-1 p-1 rounded-[3px] `}
         onMouseEnter={(e) => setHovering(true)}
         onMouseOut={(e) => handleMouseOut(e)}
      // onClick={(e)=> datesHandler.toggleStatus(period, cardInfos, setCardInfos)}
      >
         {!hovering &&
            <AccessTimeIcon className="text-base" />
         }
         {hovering && (
            period.done
               ? <CheckBoxIcon className="text-base text-green-700" />
               : <CheckBoxOutlineBlankIcon className="text-base hover:text-green-700" />
         )}
         <p>
            {period.start && period.end
               ? `${startDate} - ${endDate}`
               : period.start && !period.end
                  ? `Começou: ${startDate}`
                  : !period.start && period.end && (endDate)
            }
         </p>
      </div>
   )
}