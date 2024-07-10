interface IHomeIconProps {
  className?: string;
}

export default function HomeIcon({ className="h-8 w-8 stroke-dark-gray dark:stroke-white" }:IHomeIconProps ) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 9.12378L13 2.12378L22 9.12378V20.1238C22 20.6542 21.7893 21.1629 21.4142 21.538C21.0391 21.9131 20.5304 22.1238 20 22.1238H6C5.46957 22.1238 4.96086 21.9131 4.58579 21.538C4.21071 21.1629 4 20.6542 4 20.1238V9.12378Z"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 22.1238V12.1238H16V22.1238"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
