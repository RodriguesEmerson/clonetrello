
import { useCalendar } from "../../hooks/useCalendar";
import { useDateHandler } from "../../hooks/useDateHandler";
import { ChangeMonthButtons } from "./components/changeMonthButtons";
import { WeekDaysTitle } from "./components/weekDaysTitle";
import { calendarStore } from "./zustand/calendarStore";

export const Calendar = () => {
   const { getCalendarDays, incrementMonth, incrementYear, decrementMonth, decrementYear } = useCalendar();

   const selectedMonth = calendarStore(state => state.selectedMonth);
   const selectedYear = calendarStore(state => state.selectedYear);
  
   const calendarDays = getCalendarDays(selectedMonth, selectedYear);

   return (
      <div className="border-b-gray-200 border-b rounded-md">
         <ChangeMonthButtons />
         <div className="grid grid-cols-7 mb-2 text-gray-600">
            <WeekDaysTitle />
            {calendarDays?.previousMonthLastDays.map(day => (
               <CalendarDay
                  day={day}
                  month={decrementMonth(selectedMonth)}
                  year={decrementYear(selectedMonth, selectedYear)}
                  key={`pmd${day}${selectedMonth}`}
               />
            ))}

            {calendarDays?.selectedMonthDays.map(day => (
               <CalendarDay
                  day={day}
                  month={selectedMonth}
                  year={selectedYear}
                  key={`cmd${day}${selectedMonth + 1}`}
               />
            ))}

            {calendarDays?.nextMonthFirstDays.map(day => (
               <CalendarDay
                  day={day}
                  month={incrementMonth(selectedMonth)}
                  year={incrementYear(selectedMonth, selectedYear)}
                  key={`nmd${day}${selectedMonth + 2}`}
               />
            ))}
         </div>
      </div>
   )
}

const CalendarDay = ({ day, month, year, classRest, ...rest }) => {
   const insertDateType = calendarStore(state => state.insertDateType);
   const editingPeriod = calendarStore(state => state.editingPeriod);

   const { addPeriodDate } = useDateHandler();
   const { isDateInAnalyzedPeriod } = useCalendar();
   return (
      <span
         className={`h-8 leading-8 rounded-[3px] text-[14px] text-center hover:bg-gray-100 text-gray-500 cursor-pointer border border-white ${(new Date().getDate() == day && month == new Date().getMonth() + 1 && year == new Date().getFullYear()) && "text-blue-600 font-bold border-b-[3px] border-b-blue-600"}
           ${(isDateInAnalyzedPeriod(`${year}/${month}/${day}`, (editingPeriod.start), (editingPeriod.end)) && "bg-blue-100 hover:!bg-blue-300")} 
         `}
         onClick={() => { addPeriodDate(`${year}/${month}/${day}`, insertDateType, true) }}
      >{day}</span>
   )
}