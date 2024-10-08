interface IDotsMenuProps {
  className: string;
}

export default function DotsMenu({ className }: IDotsMenuProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.00004 8.66668C8.36823 8.66668 8.66671 8.3682 8.66671 8.00001C8.66671 7.63182 8.36823 7.33334 8.00004 7.33334C7.63185 7.33334 7.33337 7.63182 7.33337 8.00001C7.33337 8.3682 7.63185 8.66668 8.00004 8.66668Z"
        fill="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00004 3.99999C8.36823 3.99999 8.66671 3.70151 8.66671 3.33332C8.66671 2.96513 8.36823 2.66666 8.00004 2.66666C7.63185 2.66666 7.33337 2.96513 7.33337 3.33332C7.33337 3.70151 7.63185 3.99999 8.00004 3.99999Z"
        fill="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00004 13.3333C8.36823 13.3333 8.66671 13.0349 8.66671 12.6667C8.66671 12.2985 8.36823 12 8.00004 12C7.63185 12 7.33337 12.2985 7.33337 12.6667C7.33337 13.0349 7.63185 13.3333 8.00004 13.3333Z"
        fill="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
