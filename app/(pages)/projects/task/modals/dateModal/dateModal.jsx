

import ModalBox from "../boxModal";
import { Calendar } from "./calendar/calendar";
import { ChangePeriodInput } from "./calendar/components/changePeriodInput";
import { ReminderSelect } from "./reminderSelect";
import { SaveButton } from "../../components/saveButton";
import { useDateHandler } from "../hooks/useDateHandler";
import { hiddenModalsStore } from "./../../zustand/hiddenModalsStore";

export const DateModal = () => {
   const { savePeriod } = useDateHandler();
   const setHiddenAllModals = hiddenModalsStore(state => state.setHiddenAllModals);

   return (
      <ModalBox modalName={'Data'}>
         <Calendar />
         <p className="font-semibold text-xs mb-1 mt-4 text-gray-600">Definir lembrete</p>
         <ReminderSelect />

         <div className="flex items-center justify-between mt-4">
            <ChangePeriodInput title={'Data Início'} type={"start"} />
            <ChangePeriodInput title={'Data Fim'} type={"end"} />
         </div>
         <SaveButton onClick={() => {savePeriod(); setHiddenAllModals()}}/>
      </ModalBox>
   )
}
