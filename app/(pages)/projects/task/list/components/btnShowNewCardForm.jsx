import { Add } from '@mui/icons-material';

export const BtnShowNewCardForm = ({ ...props }) => {

   return (
      <div
         className="flex gap-1 mb-1 mr-1 items-center justify-center w-9/12 hover:bg-gray-300 transition-all cursor-pointer rounded-md h-9"
         {...props}
      >
         <Add className="!text-base" />
         <p className="font-semibold text-gray-500 text-13px">Adicionar novo cartão</p>
      </div>

   )
}