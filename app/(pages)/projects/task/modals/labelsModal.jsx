'use client';

import { useEffect, useState } from "react";
import ModalBox from "./boxModal";
import { useEditingCardStore } from "../zustand/useEditingCardStore";
import { hiddenModalsStore } from "../zustand/hiddenModalsStore";
import { useLabelsHandler } from "./hooks/useLabelsHandler"


const labelsList = [
   { color: '#FFC636' },
   { color: '#FF6444' },
   { color: '#00ADA9' },
   { color: '#260273' },
   { color: '#04D99D' },
   { color: '#F205CB' },
   { color: '#7C05F2' },
]

export const LabelsModal = () => {

   const editingCard = useEditingCardStore(state => state.editingCard);
   const isHidden = hiddenModalsStore(state => state.isHidden);
   

   if(isHidden.labels) return <></>;
   return (
      <ModalBox modalName={'Etiquetas'}>
         <ul className="flex flex-col gap-[6px]  p-1">
            {labelsList.map(label => (
               <Label label={label} editingLabels={editingCard.labels} key={label.color} />
            ))}
         </ul>
      </ModalBox>
   )
}

function Label({ label, editingLabels }) {
   const [checked, setChecked] = useState(false);
   const { labelsHandler } = useLabelsHandler();

   useEffect(() => {
      editingLabels.includes(label.color) && setChecked(true);
   }, []);

   return (
      <li className="flex gap-2 w-full" key={label.color}>
         <input className="w-[18px]" type="checkbox" id={`check${label.color}`}
            checked={checked} //Verifica se há alguma cor selecionada, se sim, seta checcked;
            onChange={() => { labelsHandler(label.color); setChecked(!checked) }}
         />
         <label
            className={"w-full block"}
            htmlFor={`check${label.color}`}
         >
            <div className="w-full h-8 rounded cursor-pointer" style={{ backgroundColor: `${label.color}` }}></div>
         </label>
      </li>
   )
}