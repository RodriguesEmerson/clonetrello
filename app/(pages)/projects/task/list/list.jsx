'use client'

import { Card } from "../card/card";
import { NewCardForm } from "./components/newCardForm";
import { DropArea } from "./dropArea"

export const List = () => {
   return (
      <div className="list w-[270px] min-w-[270px]  bg-gray-100 shadow-4xl p-1 rounded-xl text-sm transition-all"
         // onDragStart={(e) => { dragDrop.dragStart(e) }}
         onDragEnter={(e) => { }}
         onDragOver={(e) => { }}
      >
         <h2 className="mb-2 ml-3 mt-2 text-sm font-bold text-gray-700">List Name</h2>
         <DropArea >
            <Card />
         </DropArea>
         <NewCardForm />
      </div>
   )
   ////CRIANDO DROR-AREA
}