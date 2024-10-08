interface IStockIconProps {
  className?: string;
}

export default function StockIcon({
  className = "h-8 w-8 stroke-dark-gray dark:stroke-white",
}: IStockIconProps) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 3.21472H4C3.44772 3.21472 3 3.66244 3 4.21472V7.21472C3 7.76701 3.44772 8.21472 4 8.21472H22C22.5523 8.21472 23 7.76701 23 7.21472V4.21472C23 3.66244 22.5523 3.21472 22 3.21472Z"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8.21472V19.2147C5 19.7452 5.21071 20.2539 5.58579 20.6289C5.96086 21.004 6.46957 21.2147 7 21.2147H19C19.5304 21.2147 20.0391 21.004 20.4142 20.6289C20.7893 20.2539 21 19.7452 21 19.2147V8.21472"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 12.2147H15"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
