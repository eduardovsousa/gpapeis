import EditButton from "./Edit";
import AddButton from "./Add";
import DeleteButton from "./Delete";

interface IButtonsProps {
  onAdd: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export default function Buttons({ onAdd, onDelete, onEdit }: IButtonsProps) {
  return (
    <div className="flex items-center justify-start space-x-4 w-full">
      <EditButton className="hidden lg:block" onClick={onEdit} />
      <AddButton onClick={onAdd} />
      <DeleteButton className="hidden lg:block" onClick={onDelete} />
    </div>
  );
}
