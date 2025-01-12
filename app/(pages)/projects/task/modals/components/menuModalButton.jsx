export const MenuModalButton = ({children, ...props}) => {
   return(
      <button 
         type="button"
         className="flex flex-row gap-2 justify-start items-center w-fit h-8 px-2 hover:bg-gray-200 transition-all cursor-pointer text-xs font-bold bg-white rounded-sm"
      >
         {children}
      </button>
   )
}