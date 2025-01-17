const weekDays = ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sáb'];

export const WeekDaysTitle = () => {
   return (
      <>
         {weekDays.map(day => (
            <span
               key={`weedDay${day}`}
               className={`text-xs  text-center font-semibold mb-2 ${day == "Dom" && "text-red-700"}`}
            >{day}</span>
         ))}
      </>
   )
}