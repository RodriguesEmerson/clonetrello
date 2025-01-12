export const Labels = ({ labels }) => {
   if (!!!labels) return <></>;
   return (
      <div className="labels flex flex-row gap-1 mb-1">
         {labels.map(label => (
            <span key={label} className={`w-12 h-2 rounded-lg mt-2 mb-[-5px]`} data-color={`${label}`} style={{ backgroundColor: `${label}` }}></span>
         ))}
      </div>
   )
}