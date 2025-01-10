

export const Card = () => {

   const cardInfos = { id: "123", key: "321", capa:{full: false, color: "#b9f1f9", img: false}, content: "Texto do card!", coments: ""}
   const isEditingCard = false;
   const hiddenOptionsModal = false;
   return (
      <div 
         key={cardInfos.key}
         draggable="true"
         className={`p-1 cursor-grab flex flex-col gap-1 w-full shadow-4xl 
            rounded-md overflow-hidden relative mb-2 hover:outline outline-2 outline-blue-400 ${!hiddenOptionsModal && "!outline-none"} ${!isEditingCard && "card-hovering"}`}
         style={{ backgroundColor: `${cardInfos.capa.full ? cardInfos.capa.color : "white"}`}}
         onDragStart={(e)=> {}}
         onDragEnd={(e) =>  {}}
      >
         <span
            className="edit-button material-icons-outlined bg-white h-8 w-8 rounded-full  absolute right-1 top-1 !text-center !text-lg hover:bg-gray-100 transition-all pt-1px !hidden"
            onClick={(e) => {}}
         >edit</span>

         {(cardInfos.capa.img) &&
            <div className="h-36 overflow-hidden rounded-t-sm -m-1">
               <img className="w-full h-full object-cover" draggable="false" src={cardInfos.capa.img}></img>
            </div>
         }
         {(cardInfos.capa.color && !cardInfos.capa.full) &&
            <div className="h-12 overflow-hidden rounded-t-sm -m-1">
               <div className="h-full w-full" style={{ backgroundColor: cardInfos.capa.color }}></div>
            </div>
         }
         {
            <div className="labels flex flex-row gap-1 mb-1">
               {/* <Labels labels={cardInfos.labels} /> */}
            </div>
         }

         <div className="min-h-8 flex items-center">
            {!isEditingCard 
               ? <p className="max-w-full break-words">{cardInfos.content}</p>
               :<textarea 
                  id={`editingCardStatus${cardInfos.id}`} 
                  name="texto" 
                  ref={textAreaRef}
                  className="p-1 outline-none resize-none" 
                  placeholder="Insira um texto" 
                  value={texto}
                  autoFocus
                  onChange={(e)=> handleEditingText(e)}
                  onKeyDown={(e)=>{ e.code == "Enter" && handleSaveEditions()}}
                  // onKeyDown={(e)=>console.log(e.code == "Enter") }
               >
               </textarea>
            }
            
         </div>
         {
            (<div className="flex flex-row flex-wrap gap-2 text-xs text-gray-500 items-center">
               {cardInfos.coments.length > 0 &&
                  <div className="h-4 flex flex-row items-center gap-1">
                     <span className="material-icons !text-lg scale-90 -mt-[2px]">chat</span>
                     <p>{cardInfos.coments.length}</p>
                  </div>
               }
               {
                  // <PeriodoCard 
                  //    periodo={cardInfos.periodo} 
                  //    cardInfos={cardInfos} 
                  //    setCardInfos={setCardInfos}
                  // />
               }
               {cardInfos.integrants &&
                  <div className="flex flex-row gap-1 justify-end flex-1">
                     <Integrants integrantes={cardInfos.integrants} />
                  </div>
               }
            </div>)
         }
      </div>
   )
}