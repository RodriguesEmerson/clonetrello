import { List } from "./list/list"
import { MenuModal } from "./modals/menuModal";
import { LabelsModal } from "./modals/labelsModal"

const Task = () =>{
   return (
      <div>
         <List />
         <MenuModal />
         <LabelsModal />
      </div>
   )
}

export default Task