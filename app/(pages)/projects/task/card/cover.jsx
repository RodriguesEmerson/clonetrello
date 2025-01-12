export const Cover = ({ cardInfos }) => {
   return (
      <>
         {(cardInfos.capa.img) &&
            <div className="h-36 overflow-hidden rounded-t-sm -m-1">
               <img className="w-full h-full object-cover" draggable="false" src={cardInfos.capa.img}></img>
            </div>
         }
         {(cardInfos.capa.color && !cardInfos.capa.full) &&
            <div className="h-12 overflow-hidden rounded-t-sm -m-1">
               <div className="h-full w-full" style={{ backgroundColor: cardInfos.capa.color }}></div>
            </div>
         }</>
   )
}