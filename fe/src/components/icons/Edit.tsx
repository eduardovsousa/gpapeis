interface IEditIconProps {
  className?: string
}

export default function EditIcon({ className }: IEditIconProps) {
  return (
    <svg
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.6379 2.83828C15.8707 2.56311 16.1587 2.33913 16.4836 2.18062C16.8084 2.0221 17.163 1.93253 17.5246 1.91761C17.8863 1.90268 18.2471 1.96274 18.584 2.09395C18.921 2.22515 19.2268 2.42463 19.4818 2.67967C19.7368 2.93471 19.9356 3.23971 20.0653 3.57523C20.1951 3.91075 20.253 4.26944 20.2355 4.62843C20.2179 4.98742 20.1252 5.33884 19.9633 5.66028C19.8013 5.98173 19.5738 6.26615 19.295 6.49542L6.95216 18.8383L1.92358 20.2097L3.29501 15.1811L15.6379 2.83828Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8098 4.66693L17.4669 8.32407"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
