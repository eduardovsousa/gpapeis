import EditIcon from "@/components/icons/Edit";
import { cn } from "@/utils/cs";

interface IEditButtonProps {
  onClick: () => void;
  className: string;
}

export default function EditButton({ onClick, className }: IEditButtonProps) {
  return (
    <button
    className={cn("bg-purple border-2 border-purple hover:bg-purple/90 transition-colors p-1 rounded-md",className)}
    onClick={onClick}
  >
    <EditIcon className="w-6 h-6" />
  </button>
  )
}