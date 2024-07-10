import AddIcon from "@/components/icons/Add";

interface IAddButtonProps {
  onClick: () => void;
}

export default function AddButton({ onClick }: IAddButtonProps) {
  return (
    <button
    className="border-2 border-white lg:border-purple hover:border-white/90 lg:hover:border-purple/90 transition-colors p-1 rounded-md lg:dark:bg-purple stroke-white lg:stroke-purple lg:dark:stroke-white lg:dark:hover:bg-purple/90 absolute right-5 top-3 mt-1 lg:mt-0 lg:sticky"
    onClick={onClick}
  >
    <AddIcon className="w-4 lg:w-6 h-4 lg:h-6" />
  </button>
  )
}