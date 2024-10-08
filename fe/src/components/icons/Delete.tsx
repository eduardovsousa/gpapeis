interface IDeleteIconProps {
  className?: string;
}

export default function DeleteIcon({ className }: IDeleteIconProps) {
  return (
    <svg
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.9715 5.58093H19.4286"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6001 5.58093V18.3809C17.6001 19.2952 16.6858 20.2095 15.7715 20.2095H6.62868C5.7144 20.2095 4.80011 19.2952 4.80011 18.3809V5.58093"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.54297 5.58094V3.75237C7.54297 2.83808 8.45725 1.9238 9.37154 1.9238H13.0287C13.943 1.9238 14.8573 2.83808 14.8573 3.75237V5.58094"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.37195 10.1526V15.6383"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0286 10.1524V15.6381"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
