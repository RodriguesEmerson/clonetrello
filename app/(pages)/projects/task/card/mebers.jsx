export const Members = ({ members }) => {
   if(!!!members) return <></>;
   return (
      <div className="flex flex-row gap-1 justify-end flex-1">
         {members.map(member => (
            <div key={member.name} className="h-7 w-7 rounded-full bg-gray-600 overflow-hidden">
               <img src={member.img} className="max-w-full object-cover"></img>
            </div>
         ))}
      </div>

   )
}