import CloseIcon from '@mui/icons-material/Close';

export const CloseButton = ({...props}) => {
   return(
      <button
         type="button"
         className="!text-base text-gray-600 absolute top-1 right-2 cursor-pointer rounded-lg w-8 h-8 !leading-7 text-center hover:bg-gray-200"
         {...props}
      >
         <CloseIcon className='text-base'/>
      </button>
   )
}