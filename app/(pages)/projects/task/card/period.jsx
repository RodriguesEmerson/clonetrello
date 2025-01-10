export const Period = ({ periodo, cardInfos, setCardInfos }) => {
   // const { datesHandler } = useDateHandler();
   if(!periodo.inicio && !periodo.fim) return <></>;

   const [hovering, setHovering] = useState(false);
   function handleMouseOut(e){
      // Verifica se o cursor realmente saiu do elemento pai e não apenas foi para um filho.
      if(!e.currentTarget.contains(e.relatedTarget)){
         setHovering(false)
      } 
   }

   const dataInicio = new Date(periodo.inicio).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' });
   const dataFim = new Date(periodo.fim).toLocaleDateString('pt-br', { day: '2-digit', month: 'short' });

   return (
      <div
         className={`card_periodo h-6 flex flex-row items-center gap-1 p-1 rounded-[3px] `}
         onMouseEnter={(e)=> setHovering(true)}
         onMouseOut={(e)=> handleMouseOut(e)}
         // onClick={(e)=> datesHandler.toggleStatus(periodo, cardInfos, setCardInfos)}
      >
         <span
            className={`material-icons-outlined !text-lg scale-90 -mt-[3px]`}
         >
           {!hovering 
               ? 'schedule' 
               : periodo.status ? 'check_box' : 'check_box_outline_blank'
            } 
         </span>
         <p>
            {periodo.inicio && periodo.fim 
               ? `${dataInicio} - ${dataFim}` 
               : periodo.inicio && !periodo.fim 
                  ? `Começou: ${dataInicio}` 
                  :  !periodo.inicio && periodo.fim && (dataFim)
            }
         </p>
      </div>
   )
}