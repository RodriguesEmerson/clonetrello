import { useEffect, useRef, useState } from "react"
import { useEditingCardStore } from "../zustand/useEditingCardStore";
import { CloseButton } from "./components/closeButton";
import { hiddenModalsStore } from "../zustand/hiddenModalsStore";

export default function BoxModal({ modalName, setHiddenModal, children }) {
   const editingCardPosition = useEditingCardStore(state => state.editingCardPosition);
   const setHiddenAllModals = hiddenModalsStore(state => state.setHiddenAllModals);

   let top = editingCardPosition.top;
   const componentRef = useRef(null);
   const [topPosition, setTopPosition] = useState(editingCardPosition.top);

   useEffect(() => {
      //Calcula o top do modal, para que não passe para fora da tela.
      if (componentRef.current) {
         const modalHeight = componentRef.current.offsetHeight;
         const windowHeight = window.innerHeight - 5;
         if (modalHeight + top > windowHeight) { top = top - (modalHeight + top - windowHeight + 5) };
         setTopPosition(top);
      }
   }, [])

   return (
      <div ref={componentRef} className="modal absolute  bg-white w-[276px] p-[10px] pt-2 rounded-lg"
         style={{ top: `${topPosition}px`, left: `${editingCardPosition.left}px` }}
      >
         <h2 className="text-center text-sm font-semibold text-gray-600 mb-3">{modalName}</h2>
         <CloseButton onClick={() => setHiddenAllModals()}/>
         {children}
      </div>
   )
}