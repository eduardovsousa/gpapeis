interface ISunIconProps {
  onClick?: () => void;
  className?: string;
}

export default function SunIcon({ onClick, className }: ISunIconProps) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M7.99992 11.1667C9.47268 11.1667 10.6666 9.97277 10.6666 8.50001C10.6666 7.02725 9.47268 5.83334 7.99992 5.83334C6.52716 5.83334 5.33325 7.02725 5.33325 8.50001C5.33325 9.97277 6.52716 11.1667 7.99992 11.1667Z"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.83331V3.16665"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.8333V15.1667"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.28662 3.78668L4.22662 4.72668"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7734 12.2733L12.7134 13.2133"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33325 8.5H2.66659"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 8.5H14.6666"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.22662 12.2733L3.28662 13.2133"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7134 3.78668L11.7734 4.72668"
        stroke="#E9EAF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
