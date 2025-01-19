export const SaveButton = ({ ...props }) => {
   return (
      <button
         className="w-full h-8 bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold rounded-sm text-sm "
         {...props}
      >
         Salvar
      </button>
   )
}