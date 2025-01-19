import { Select } from "../components/select"
import { useCalendar } from "../hooks/useCalendar";
import { useDateHandler } from "../hooks/useDateHandler";
import { calendarStore } from "./calendar/zustand/calendarStore";

export const ReminderSelect = () => {
   const { reminderOptions } = useCalendar();
   const editingPeriod = calendarStore(state => state.editingPeriod);
   const { addReminder } = useDateHandler();

   return (
      <>
         <Select
            option={editingPeriod?.reminder}
            optionList={reminderOptions}
            width={'100%'}
            action={addReminder}
         />
      </>
   )
}