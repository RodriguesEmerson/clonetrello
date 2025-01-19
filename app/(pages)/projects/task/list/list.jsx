'use client'

import { NewCardForm } from "./components/newCardForm";
import { DropArea } from "./dropArea"
import { Cards } from "./../cards/cards";

export const Lists = () => {
   return (
      <div className="">
         
      </div>
   )
}

export const List = () => {
   return (
      <div className="w-[270px] min-w-[270px]  bg-gray-100 shadow-4xl p-1 rounded-xl text-sm transition-all"
         // onDragStart={(e) => { dragDrop.dragStart(e) }}
         // onDragEnter={(e) => { }}
         // onDragOver={(e) => { }}
      >
         <h2 className="mb-2 ml-3 mt-2 text-sm font-bold text-gray-700">List Name</h2>
         <DropArea >
            <Cards />
         </DropArea>
         <NewCardForm />
      </div>
   )
}