import { useEditingCardStore } from "./../zustand/useEditingCardStore"

export const Content = ({ content }) => {

   const editingCard = useEditingCardStore(state => state.editingCard);
   const isEditingCard = !editingCard;

   return (
      <div className="min-h-8 flex items-center">
         {isEditingCard
            ? <p className="max-w-full break-words">{content}</p>
            : <textarea
               name="content"
               className="p-1 w-full outline-none resize-none" 
               placeholder="Insira um texto"
               aria-label="Campo de texto para editar o conteúdo"
               autoFocus
               defaultValue={editingCard.content}
            // onKeyDown={(e)=>console.log(e.code == "Enter") }
            >
            </textarea>
         }
      </div>
   )
}