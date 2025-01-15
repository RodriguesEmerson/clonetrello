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
 
   return { convertDateToOnMothLess, convertDateToOnMothMore }
}