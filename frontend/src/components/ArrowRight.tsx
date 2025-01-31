import "./ArrowRight.css";

type ArrowRightProps = {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  scale?: number;
};

export function ArrowRight({ className, onClick, scale }: ArrowRightProps) {
  return (
    <svg
      width={(15 * (scale ?? 1)).toString() + "px"}
      height={(15 * (scale ?? 1)).toString() + "px"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="current"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

