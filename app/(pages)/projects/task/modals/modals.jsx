'use client';

import { hiddenModalsStore } from "../zustand/hiddenModalsStore";
import { useEditingCardStore } from "../zustand/useEditingCardStore";
import { LabelsModal } from "./labelsModal";
import { MembersModal } from "./membersModal";
import { MenuModal } from "./menuModal";
import { CoverModal } from "./coverModal/coverModal";
import { DateModal } from "./dateModal/dateModal"


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
      {!isHidden.cover &&
         <CoverModal />
      }
      {!isHidden.date &&
         <DateModal />
      }
      </>
   )
}