export const Button = ({
  children,
  color = "primary",
  className,
  onClick,
  disabled = false,
}: {
  children: string;
  onClick: () => void;
  color?: string;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      className={`rounded-lg px-4 py-2 bg-white text-black`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
