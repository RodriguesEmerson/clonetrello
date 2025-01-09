
export const BtnAddCard = ({ ...props }) => {
   return (
      <button
         type="sumit"
         className="font-semibold text-white text-13px bg-blue-600 h-8 leading-8 px-2 rounded-sm cursor-pointer hover:bg-blue-700 transition-all"
         {...props}>
         Adicionar cartão
      </button>
   )
}