
export const Content = ({ content }) => {
   const isEditingCard = false;
   return (
      <div className="min-h-8 flex items-center">
         {!isEditingCard
            ? <p className="max-w-full break-words">{content}</p>
            : <textarea
               name="content"
               className="p-1 w-full outline-none resize-none" f
               placeholder="Insira um texto"
               autoFocus
               onChange={(e) => { }}
               onKeyDown={(e) => { e.code == "Enter" && {} }}
            // onKeyDown={(e)=>console.log(e.code == "Enter") }
            >
            </textarea>
         }
      </div>
   )
}