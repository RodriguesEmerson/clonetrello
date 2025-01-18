import { Select } from "../components/select"
import { useCalendar } from "../hooks/useCalendar";
import { calendarStore } from "./calendar/zustand/calendarStore";

export const ReminderSelect = () => {  
      const { reminderOptions } = useCalendar();
      const setEditingPeriod = calendarStore(state => state.setEditingPeriod);
   return(
      <>
         <Select
            option={'Nenhum'}
            optionList={reminderOptions}
            width={'100%'}
            onClick={() => {}}
            // setOptions={setReminder}
         />
      </>
   )
}