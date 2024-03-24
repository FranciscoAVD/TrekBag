import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
// import { useItemsContext } from '../../lib/hooks';
import { useItemsStore } from "../../stores/itemsStore";

export default function SideBar(){
    // const { handleAddItem} = useItemsContext();
    const addItem = useItemsStore(state => state.addItem);
    return (
    <div className="sidebar">
        <AddItemForm onAddItem={addItem}/>
        <ButtonGroup />
    </div>
    )
}