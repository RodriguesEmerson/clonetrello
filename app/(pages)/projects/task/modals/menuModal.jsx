"use client";

import { useEffect, useRef } from "react";
import { MenuModalButton } from "./components/menuModalButton";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SellIcon from '@mui/icons-material/Sell';
import PersonIcon from '@mui/icons-material/Person';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import { useEditingCardStore } from "./../zustand/useEditingCardStore"
import { BgModal } from "./bgModal"
import { hiddenModalsStore } from "../zustand/hiddenModalsStore";

export const MenuModal = () => {
   const editingCardPosition = useEditingCardStore(state => state.editingCardPosition);
   const isEditingCard = useEditingCardStore(state => state.isEditingCard);
   const setShowModal = hiddenModalsStore(state => state.setShowModal);

   const modalRef = useRef(null);
   let top = editingCardPosition.top;

   useEffect(()=>{
      //Ajusta o posição top do modal;
      if(modalRef.current){
         const modalHeight = modalRef.current.offsetHeight;
         const windowHeight = window.innerHeight - 10;
         if (modalHeight + top > windowHeight) { top = top - (modalHeight + top - windowHeight + 2) };
         setPosition({...position, top: top});
      }
   },[])

   return(
      <>
      {isEditingCard &&
      
      <BgModal>
         <div
            className="modal absolute"
            style={{top: `${editingCardPosition.top}px`, left: `${editingCardPosition.left}px`}}
            ref={modalRef}
         >
            <ul className="flex gap-1 flex-col">
               <li>
                  <MenuModalButton>
                     <CreditCardIcon className="text-base"/>
                     <p>Abrir Cartão</p>
                  </MenuModalButton>
               </li>
               <li>
                  <MenuModalButton
                     onClick={()=> setShowModal("labels", false)}
                  >
                     <SellIcon className="text-base"/>
                     <p>Editar Etiquetas</p>
                  </MenuModalButton>
               </li>
               <li>
                  <MenuModalButton>
                     <PersonIcon className="text-base"/>
                     <p>Alterar Membros</p>
                  </MenuModalButton>
               </li>
               <li>
                  <MenuModalButton>
                     <WebAssetIcon className="text-base"/>
                     <p>Alterar Capa</p>
                  </MenuModalButton>
               </li>
               <li>
                  <MenuModalButton>
                     <CalendarMonthIcon className="text-base"/>
                     <p>Editar Datas</p>
                  </MenuModalButton>
               </li>
               <li>
                  <MenuModalButton>
                     <ArrowRightAltIcon className="text-base"/>
                     <p>Mover</p>
                  </MenuModalButton>
               </li>
               <li>
                  <MenuModalButton>
                     <ContentCopyIcon className="text-base"/>
                     <p>Copiar</p>
                  </MenuModalButton>
               </li>
               <li>
                  <MenuModalButton>
                     <Inventory2Icon className="text-base"/>
                     <p>Arquivar</p>
                  </MenuModalButton>
               </li>
            </ul>
         </div>
      </BgModal>
      }
      </>
   )
}