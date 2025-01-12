import { useProvidersContext } from "@/app/context/providers";
import { modalInfos } from "@/app/logica/logica-modais/main";
import { moverCard } from "@/app/logica/logica-modais/mover-card";
import { useEffect, useRef, useState } from "react";
import ModalBox from "./boxModal";
import { SelecionarDestino } from "./moveModal";

export default function CopyModal({ arrLists, setLists}){

   const { setHiddenCopiarModal, setHiddenOptionsModal  } = useProvidersContext();
   const cardInfos = modalInfos.getCardInfos();
   const [texto, setTexto] = useState(cardInfos.content);
   const listasDisponiveis = moverCard.getLists(arrLists);
   const textAreaRef = useRef(null);
   useEffect(()=>{
      textAreaRef.current.select();
      textAreaRef.current.focus();
   },[])

   function handleEditingText(e){
      const textArea = textAreaRef.current;
      setTexto(e.target.value);
      textArea.style.height = `${textArea.scrollHeight}px`
   }
   
   function handleClickCopiar(idListDestino, indexDestino){
      moverCard.copiar(idListDestino, arrLists, setLists, indexDestino, texto);
      setHiddenCopiarModal(true); setHiddenOptionsModal(true);
   }

   return (
      <ModalBox modalName={'Copiar Cartão'} setHiddenModal={setHiddenCopiarModal}>
         <div>
            <p className="text-xs font-semibold pb-1 text-gray-600">Texto do cartão</p>
            <textarea 
               id={"editing-card-text"} 
               ref={textAreaRef}
               className="outline-none min-h-14 overflow-hidden p-2 resize-none text-sm border  border-gray-500 rounded-md w-full max-w-full focus-within:border-blue-500 focus-within:border-2 focus-within:p-[7px]" 
               autoFocus 
               name="texto" 
               placeholder="Insira um texto"
               value={texto}
               onChange={(e)=> handleEditingText(e)}
            >
            </textarea>
         </div>
         <SelecionarDestino  
            listasDisponiveis={listasDisponiveis}
            handleClickMoverCard={handleClickCopiar}
            fieldName={'Copiar para...'}
            buttonValue={'Copiar'}
         />
      </ModalBox>
   )
}