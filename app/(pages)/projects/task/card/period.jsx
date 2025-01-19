import { useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { cardStore } from "../zustand/cardStore";
import { useCardHandler } from "./hooks/useCardHandler";

export const Period = ({ period }) => {
   if (!period.start && !period.end) return <></>;

   const startDate = new Date(period.start).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' });
   const endDate = new Date(period.end).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' });
   const card = cardStore(state => state.card);
   const setCardChanges = cardStore(state => state.setCardChanges);
   const { getPeriodColor } = useCardHandler();

   const [hovering, setHovering] = useState(false);
   function handleMouseOut(e) {
      // Verifica se o cursor realmente saiu do elemento pai e não apenas foi para um filho.
      if (!e.currentTarget.contains(e.relatedTarget)) {
         setHovering(false)
      }
   }

   return (
      <div
         className={`h-6 flex flex-row items-center gap-1 p-1 rounded-[3px] ${period.done && "text-green-100 bg-green-700"}`}
         style={{ backgroundColor: getPeriodColor(period) }}
         onMouseEnter={(e) => setHovering(true)}
         onMouseOut={(e) => handleMouseOut(e)}
         onClick={(e)=> {setCardChanges("period", { ...card.period, done: !card.period.done })}}
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