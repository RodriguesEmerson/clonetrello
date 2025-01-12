export const Coments = ({ coments }) => {
   if(!!!coments) return <></>;
   return (
      <>
         {coments.length > 0 &&
            <div className="h-4 flex flex-row items-center gap-1">
               <span className="material-icons !text-lg scale-90 -mt-[2px]">chat</span>
               <p>{coments.length}</p>
            </div>
         }
      </>
   )
}