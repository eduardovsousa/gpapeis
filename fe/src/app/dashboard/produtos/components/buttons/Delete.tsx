import DeleteIcons from "@/components/icons/Delete";
import { cn } from "@/utils/cs";

interface IDeleteButtonProps {
  onClick: () => void;
  className: String;
}

export default function DeleteButton({ onClick, className }: IDeleteButtonProps ) {
  return (
    <button
    className={cn("bg-red border-2 border-red hover:bg-red/90 transition-colors p-1 rounded-md", className)}
    onClick={onClick}
  >
    <DeleteIcons className="w-6 h-6" />
  </button>
  )
}