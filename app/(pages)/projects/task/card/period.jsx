import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useEffect, useState } from "react";
import { cardStore } from "../zustand/editingCardStore";
import { useCardHandler } from "./hooks/useCardHandler";

export const Period = ({ card, ...rest }) => {
   if (!card.period.start && !card.period.end) return <></>;
   const [period, setPeriod] = useState(card.period);
   const startDate = new Date(card.period.start).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' });
   const endDate = new Date(card.period.end).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' });
   const { getPeriodColor } = useCardHandler();

   const [hovering, setHovering] = useState(false);
   function handleMouseOut(e) {
      // Verifica se o cursor realmente saiu do elemento pai e não apenas foi para um filho.
      if (!e.currentTarget.contains(e.relatedTarget)) {
         setHovering(false)
      }
   }

   useEffect(() => { 
      setPeriod(card.period);
   }, [card.period]);   

   return (
      <div
         className={`h-6 flex flex-row items-center gap-1 p-1 rounded-[3px] ${period.done && "text-green-100 bg-green-700"}`}
         style={{ backgroundColor: getPeriodColor(period), color: getPeriodColor(period) ? "rgba(255, 255, 255, 0.8" : "gray" }}
         onMouseEnter={(e) => setHovering(true)}
         onMouseOut={(e) => handleMouseOut(e)}
         onClick={(e)=> {setPeriod({...period, done: !period.done }); card.period.done = !period.done;}}
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