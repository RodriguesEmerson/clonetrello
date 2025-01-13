'use client';

import { hiddenModalsStore } from "../zustand/hiddenModalsStore";
import { useEditingCardStore } from "../zustand/useEditingCardStore";
import { LabelsModal } from "./labelsModal";
import { MembersModal } from "./membersModal";
import { MenuModal } from "./menuModal";


export const Modals = () => {
   const isEditingCard = useEditingCardStore(state => state.isEditingCard);
   const isHidden = hiddenModalsStore(state => state.isHidden);
   return(
      <>
      {isEditingCard &&
         <MenuModal />
      }
      {!isHidden.labels &&
         <LabelsModal />
      }
      {!isHidden.members &&
         <MembersModal />
      }
      </>
   )
}