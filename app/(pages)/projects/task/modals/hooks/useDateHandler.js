'use client'

export const useDateHandler = () => {

   function convertDateToOnMothLess(date) {
      const dateArray = date.split('/');
      const month = dateArray[1] - 1;
      console.log(`${dateArray[0]}/${month}/${dateArray[2]}`)
      return `${dateArray[0]}/${month}/${dateArray[2]}`
   };

   function convertDateToOnMothMore(date) {
      const dateArray = date.split('/');
      const month = dateArray[1] + 1;
      return `${dateArray[0]}/${month}/${dateArray[2]}`
   };

   function removePeriodStartDate(date){
      if(isValidDate(date)){
         
      }
   }
   function removePerdiodEndDate(date){

   }
   function addPeriodStartDate(date){

   }
   function addPeriodEndDate(date){

   }
   function isValidDate(date) {
      const dateArray = date.split('/');
      if (dateArray.length !== 3) return false;
   
      const day = parseInt(dateArray[0], 10);
      const month = parseInt(dateArray[1], 10);
      const year = parseInt(dateArray[2], 10);
   
      if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
   
      if (month < 1 || month > 12) return false;
   
      const daysInMonth = new Date(year, month, 0).getDate();
      if (day < 1 || day > daysInMonth) return false;
   
      return true;
   }
 
   return { 
      convertDateToOnMothLess, 
      convertDateToOnMothMore,
      removePeriodStartDate,  
      removePerdiodEndDate,  
      addPeriodStartDate,
      addPeriodEndDate
   }
}