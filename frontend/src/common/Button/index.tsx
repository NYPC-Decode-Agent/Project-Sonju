type ButtonHTMLProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type ButtonProps = Omit<ButtonHTMLProps, "className"> & {
  color?: "primary" | "secondary" | "black";
};

type AnchorHTMLProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
type AnchorProps = Omit<AnchorHTMLProps, "className"> & {};

const buttonCss =
  "inline-grid gap-2 w-full h-12 px-5 border-0 rounded items-center justify-center no-underline font-medium text-white cursor-pointer select-none";

export const Button = ({
  children,
  color = "primary",
  ...props
}: ButtonProps) => (
  <button
    className={`${buttonCss} ${
      color === "primary"
        ? "bg-primary-700"
        : color === "secondary"
          ? "bg-secondary-650"
          : color === "black"
            ? "bg-black"
            : ""
    }`}
    {...props}
  >
    {children}
  </button>
);

export const ButtonLink = ({ children, ...props }: AnchorProps) => (
  <a className={buttonCss} {...props}>
    {children}
  </a>
);

// export const IconButton = styled(Button, "icon");
