'use client'

export const useCalendar = () => {

   const weekDays = ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sáb'];
   const reminderOptions = [
      "Nenhum", "Na hora da entrega", "5 minutos antes",
      "10 minutos antes", "15 minutos antes", "1 hora antes",
      "2 horas antes", "1 dia antes", "2 dias antes"
   ]
   function monthsDays(month, year) {
      const daysNumberInTheLastMonth = new Date(year, month, 0).getDate();
      const currentMont = new Date(year, month + 1, 0).getDate();
      const dayNumberNextMonth = new Date(year, month + 2, 0).getDate();

      return ({ prevMonth: daysNumberInTheLastMonth, currMonth: currentMont, nextMonth: dayNumberNextMonth });
   }

   function getCalendarDays(month, year) { 
      //Dia da semana que foi o primeiro dia do mês.
      const firsWeekDayOfMonth = (new Date(year, month - 1, 1).getDay());

      
      //Cria um array com números do 1º dia da semana até o 1º dia do mês.
      const weekDays = []
      for (let day = 1; day <= firsWeekDayOfMonth; day++) {
         weekDays.push(day);
      }

      //Cria um array com os ultimos dias do mês anterior que aparecem na mesma semana do 1º dia do mês atual.
      const previousMonthLastDays = [];
      for (let day = firsWeekDayOfMonth - 1; day >= 0; day--) {
         previousMonthLastDays.push(monthsDays(month - 1, year).prevMonth - day);
      }

      //Cria um array com os primerios dias do próximo mês.
      const nextMonthFirstDays = [];
      const lastWeekDayOfCurrentMonth = new Date(year, month, 0).getDay();
      let day = 1;
      for (let d = lastWeekDayOfCurrentMonth; d < 6; d++) {
         nextMonthFirstDays.push(day);
         day++;
      }

      //Cria um array com todos os dias do mês selecionado.
      const selectedMonthDays = [];
      const selectedMonth = new Date(year, month, 0).getDate();
      for (let day = 1; day <= selectedMonth; day++) {
         selectedMonthDays.push(day)
      }

      const calendarDatas = {
         firsWeekDayOfMonth: firsWeekDayOfMonth,
         previousMonthLastDays: previousMonthLastDays,
         selectedMonthDays: selectedMonthDays,
         nextMonthFirstDays: nextMonthFirstDays
      }

      return calendarDatas;
   }

   function isDateInAnalyzedPeriod(date, start, end) {
      
      const startDate = new Date(start).getTime();
      const endDate = new Date(end).getTime();
      const analyzedDay = (new Date(date).getTime());
      
      //Checa se dia está dentro do periodo analizado.
      if(start && end){
         if (analyzedDay >= startDate && analyzedDay <= endDate) return true;
      }
      if (analyzedDay == startDate || analyzedDay == endDate) return true;

      return false;

   }

   function decrementMonth(selectedMonth) {
      return ((selectedMonth - 2 + 12) % 12) + 1;
   }
   function incrementMonth(selectedMonth) {
      return (selectedMonth % 12 + 1);
   }
   function decrementYear(selectedMonth, selectedYear) {
      return selectedMonth - 1 < 1 ? selectedYear - 1 : selectedYear;
   }
   function incrementYear(selectedMonth, selectedYear) {
      return selectedMonth + 1 > 12 ? selectedYear + 1 : selectedYear;
   }


   return { getCalendarDays, isDateInAnalyzedPeriod, reminderOptions, decrementMonth, incrementMonth, decrementYear, incrementYear }
}