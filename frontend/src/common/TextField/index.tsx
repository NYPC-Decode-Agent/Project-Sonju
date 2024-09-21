type InputHTMLProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputProps = Omit<
  InputHTMLProps,
  "children" | "className" | "placeholder"
> & {
  placeholder: React.ReactNode;
};

const textLabelCss =
  "flex relative w-full h-14 py-[3px] px-[18px] rounded m-px outline outline-1 outline-gray-light border-2 border-transparent cursor-text items-center hover:outline-gray-dark focus-within:border-primary-650 focus-within:outline-primary-650 hover:focus-within:outline-primary-650 bg-white";

const textInputCss =
  "peer block contain-size w-full bg-white caret-primary-650 border-none leading-5 focus:outline-none";

const textPlaceholderCss =
  "absolute top-[18px] left-3 px-2 leading-4 text-gray-light bg-white [transition:color_.2s,_transform_.2s] origin-top-left select-none cursor-text peer-focus:text-primary-600 peer-focus:translate-y-[calc(-50%_-_18px)] peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:translate-y-[calc(-50%_-_18px)] peer-focus:scale-75";

export const TextField = ({ placeholder, ...props }: InputProps) => (
  <label className={textLabelCss}>
    <input
      type="text"
      placeholder="​"
      spellCheck={false}
      className={textInputCss}
      {...props}
    />
    <div className={textPlaceholderCss}>{placeholder}</div>
  </label>
);
