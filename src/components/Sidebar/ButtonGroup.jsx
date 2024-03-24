import Button from "./Button";
import { useItemsStore } from "../../stores/itemsStore";
// import { useItemsContext } from '../../lib/hooks';

export default function ButtonGroup() {
  // const {
  //   handleMarkAllAsComplete,
  //   handleMarkAllAsIncomplete,
  //   handleResetToInitial,
  //   handleRemoveAllItems,
  // } = useItemsContext();

  const markAllAsComplete = useItemsStore(state => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(state => state.markAllAsIncomplete); 
  const resetToInitial = useItemsStore(state => state.resetToInitial);
  const removeAllItems = useItemsStore(state => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="btn-group">
      {secondaryButtons.map(({ text, onClick }) => {
        return (
          <Button key={text} onClick={onClick} buttonType="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}
