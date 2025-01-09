import { BtnAddCard } from "./btnAddCard"
import { BtnShowNewCardForm } from "./btnShowNewCardForm";
import { useNewCardFormStore } from "../zustand/useNewCardFomrStore";
import CloseIcon from '@mui/icons-material/Close';

export const NewCardForm = () => {
   const showingForm = useNewCardFormStore(state => state.showingForm);
   const setShowingForm = useNewCardFormStore(state => state.setShowingForm);

   return (
      <div className="flex justify-center">
         {!showingForm &&
            <BtnShowNewCardForm onClick={() => setShowingForm(true)} />
         }
         {showingForm &&
            <form className="novo-card p-1 cursor-grab flex flex-col gap-1 w-full min-h-14 shadow-4xl  overflow-hiddenrelative">
               <textarea
                  name="text"
                  className="p-1 outline-none resize-none  bg-white rounded-md"
                  placeholder="Insira um texto"
                  autoFocus
                  onKeyDown={(e) => e.code == "Enter" && console.log('s')}
               >
               </textarea>

               <div className="flex items-center justify-end gap-1 w-full p-1 h-9">
                  <BtnAddCard  />
                  <div className='flex items-center justify-center w-8 h-8 rounded-sm hover:bg-gray-300 transition-all cursor-pointer'>
                     <CloseIcon onClick={() => setShowingForm(false)}/>
                  </div>

               </div>
            </form>
         }

      </div>
   )
}