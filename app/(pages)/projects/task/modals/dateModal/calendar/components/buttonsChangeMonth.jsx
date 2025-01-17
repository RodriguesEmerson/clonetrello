import { calendarStore } from "../zustand/calendarStore";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useCalendar } from "../../../hooks/useCalendar";

export const ButtonsChangeMonth = () => {
   const selectedMonth = calendarStore(state => state.selectedMonth);
   const selectedYear = calendarStore(state => state.selectedYear);
   const setSelectedMonth = calendarStore(state => state.setSelectedMonth);
   const setSelectedYear = calendarStore(state => state.setSelectedYear);
   const { decrementMonth, incrementMonth, incrementYear, decrementYear } = useCalendar();

   return (
      <div className="flex justify-between items-center  text-gray-600 mb-3">
         <ChevronLeftIcon
            className="material-icons h-7 w-7 pt-[2px] text-center hover:bg-gray-200 cursor-pointer rounded"   
            onClick={() => { 
               setSelectedMonth(decrementMonth(selectedMonth)); 
               setSelectedYear(decrementYear(selectedMonth, selectedYear));
            }}
         />
         <p className="text-xs font-semibold cursor-default">
            {`${new Date(`${selectedYear}/${selectedMonth}/1`).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}`}
         </p>
         <ChevronRightIcon
            className="material-icons h-7 w-7 pt-[2px] text-center hover:bg-gray-200 cursor-pointer rounded"
            onClick={() => {
               setSelectedMonth(incrementMonth(selectedMonth)); 
               setSelectedYear(incrementYear(selectedMonth, selectedYear));
            }}
         />
      </div>
   )
}