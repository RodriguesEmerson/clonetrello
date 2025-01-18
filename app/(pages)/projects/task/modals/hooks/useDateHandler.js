'use client'

import { calendarStore } from "../dateModal/calendar/zustand/calendarStore";

export const useDateHandler = () => {

   const editingPeriod = calendarStore(state => state.editingPeriod);
   const setEditingPeriod = calendarStore(state => state.setEditingPeriod);
   const insertDateType = calendarStore(state => state.insertDateType);
   const setInsertDateType = calendarStore(state => state.setInsertDateType);

   function convertDateToOnMothLess(date) {
      const dateArray = date.split('/');
      return `${dateArray[0]}/${dateArray[1] - 1}/${dateArray[2]}`
   };

   function convertDateToOnMothMore(date) {
      const dateArray = date.split('/');
      return `${dateArray[0]}/${parseInt(dateArray[1]) + 1}/${dateArray[2]}`
   };

   function convertDateFormat(date, locale) {
      const dateArray = date.split('/');
      switch (locale) {
         case ('pt-BR'): {
            return `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
            break
         }
         case ('js'): {
            return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
            break
         }
         default: console.log("Invalid locale");
      }
   }

   function removePeriodDate(type) {
      setEditingPeriod({ ...editingPeriod, [type]: false })
   }

   function addPeriodDate(date, type, changeType) {
      if (isValidDate(date)) {
         // If the start date is greater than the end date, the start date is set to date and the end date is set to false.
         if(isGreaterThan(date, editingPeriod.end) && insertDateType === "start"){
            setEditingPeriod({ ...editingPeriod, start: date, end: false });
            changeType && setInsertDateType("end");
            return;
         }
         // If the end date is less than the start date, the start date is set to date and the end date is set to false.
         if(isGreaterThan(editingPeriod.start, date) && insertDateType === "end"){
            setEditingPeriod({ ...editingPeriod, start: date, end: false });
            changeType && setInsertDateType("end");
            return;
         }
         
         setEditingPeriod({ ...editingPeriod, [type]: date });
         changeType && setInsertDateType(insertDateType === "start" ? "end" : "start");
      }
   }
   function addReminder(reminder) {
      setEditingPeriod({ ...editingPeriod, reminder: reminder })
   }

   function isValidDate(date) {
      const dateArray = date.split('/');
      if (dateArray.length !== 3) return false;

      const day = parseInt(dateArray[2], 10);
      const month = parseInt(dateArray[1], 10);
      const year = parseInt(dateArray[0], 10);

      if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

      if (month < 1 || month > 12) return false;

      const daysInMonth = new Date(year, month, 0).getDate();
      if (day < 1 || day > daysInMonth) return false;

      return true;
   }

   function today() {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}/${month}/${day}`;
   }

   function isGreaterThan(date, endDate){
      if(new Date(date).getTime() > new Date(endDate).getTime()) return true;
   }

   return {
      convertDateToOnMothLess,
      convertDateToOnMothMore,
      removePeriodDate,
      addPeriodDate,
      convertDateFormat,
      today
   }
}