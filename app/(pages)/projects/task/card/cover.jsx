export const Cover = ({ cover }) => {
   return (
      <>
         {(cover.img) &&
            <div className="h-36 overflow-hidden rounded-t-sm -m-1">
               <img className="w-full h-full object-cover" draggable="false" src={cover.img}></img>
            </div>
         }
         {(cover.color && !cover.full) &&
            <div className="h-12 overflow-hidden rounded-t-sm -m-1">
               <div className="h-full w-full" style={{ backgroundColor: cover.color }}></div>
            </div>
         }
      </>
   )
}