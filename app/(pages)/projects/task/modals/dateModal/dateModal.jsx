

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
         {/*
         <ButtonSaveDefault
            type={'submit'}
            value={'Salvar'}
            width={'100%'}
            handleClick={handleClickSave}
         /> */}
         <div className="flex items-center justify-between mt-4">
            <ChangePeriodInput title={'Data Início'} type={"start"} />
            <ChangePeriodInput title={'Data Fim'} type={"end"} />
         </div>
         <SaveButton onClick={() => {savePeriod(); setHiddenAllModals()}}/>
      </ModalBox>
   )
}


function ButtonsMudarPeriod() {
   const { datesHandler } = useDateHandler();
   const {
      period, startDate, endDate, setStartDate,
      setEndDate, checkOne, checkTwo, setCheckOne,
      setCheckTwo, dateType, setDateType
   } = useDateContext();

   if (!period) return <></>
   return (
      <div className="text-xs mb-2">
         <p className="font-semibold mb-1 text-gray-600">Data Início</p>
         <div className="flex items-center gap-[6px] mb-3">
            <input
               className="w-[18px] h-[18px]" type="checkbox"
               checked={checkOne ? true : false}
               onChange={(e) => {
                  !e.target.checked
                     ? datesHandler.handleStartDate(startDate, endDate, true)
                     : datesHandler.handleStartDate(datesHandler.today(), endDate, false);
                  setCheckOne(!checkOne)
               }}
            />
            <input
               type="text"
               className={`w-[100px] h-8 border border-gray-400 rounded-[3px] pl-2 focus-within:outline-[3px]  focus-within:outline-blue-400 
                  ${!checkOne && "bg-gray-200 border-none"} 
                  ${(dateType && checkOne) && ("border-none !outline !outline-blue-400")}
               `}
               placeholder="dd/mm/aaaa"
               disabled={!checkOne ? true : false}
               value={startDate}
               onClick={() => setDateType(true)}
               onChange={(e) => { setStartDate(e.target.value) }}
               onKeyDown={(e) => { (e.key == "Enter") && datesHandler.handleStartDate(e.target.value, endDate, false) }}

            />
         </div>

         {/* ///**************DATA FIM************************/}
         <p className="font-semibold mb-1 text-gray-600">Data de entrega</p>
         <div className="flex items-center gap-[6px]  mb-3">
            <input
               className="w-[18px] h-[18px]" type="checkbox"
               checked={checkTwo ? true : false}
               onChange={(e) => {
                  !e.target.checked
                     ? datesHandler.handleEndDate(endDate, startDate, true)
                     : datesHandler.handleEndDate(datesHandler.today(), startDate, false);
                  setCheckTwo(!checkTwo)
               }}
            />
            <input
               type="text"
               className={`w-[100px] h-8 border border-gray-400 rounded-[3px] pl-2 focus-within:outline-[3px] focus-within:outline-blue-400
                  ${!checkTwo && "bg-gray-200 border-none"} 
                  ${(!dateType && checkTwo) && ("border-none !outline !outline-blue-400")}
               `}
               placeholder="D/M/AAA"
               disabled={!checkTwo ? true : false}
               value={endDate}
               onClick={() => setDateType(false)}
               onChange={(e) => { setEndDate(e.target.value) }}
               onKeyDown={(e) => { (e.key == "Enter") && datesHandler.handleEndDate(e.target.value, startDate, false) }}
            />
            <input
               type="text"
               className={`w-[100px] h-8 border border-gray-400 rounded-[3px] pl-2 focus-within:outline-blue-400
                  ${!checkTwo && "bg-gray-200 border-none"}
               `}
               placeholder="hh:mm"
               onChange={() => { }}
            />
         </div>

      </div>
   )
}