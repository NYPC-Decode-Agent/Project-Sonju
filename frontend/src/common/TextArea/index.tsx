type TextAreaHTMLProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
type TextAreaProps = Omit<
  TextAreaHTMLProps,
  'children' | 'className' | 'placeholder' | 'value'
> & {
  placeholder: React.ReactNode;
  value: string;
};

const textLabelCss =
  'flex relative w-full h-80 py-[3px] px-[18px] rounded m-px outline outline-1 outline-gray-light border-2 border-transparent cursor-text items-center hover:outline-gray-dark focus-within:border-primary-650 focus-within:outline-primary-650 hover:focus-within:outline-primary-650';

const textTextAreaCss =
  'peer block contain-size w-full h-full py-3 bg-white caret-primary-650 border-none leading-5 focus:outline-none';

const textPlaceholderCss =
  'absolute top-[18px] left-3 px-2 leading-4 text-gray-light bg-white [transition:color_.2s,_transform_.2s] origin-top-left select-none cursor-text peer-focus:text-primary-600 peer-focus:translate-y-[calc(-50%_-_18px)] peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:translate-y-[calc(-50%_-_18px)] peer-focus:scale-75';

export const TextArea = ({ placeholder, value, ...props }: TextAreaProps) => (
  <label className={textLabelCss}>
    <textarea
      placeholder="​"
      spellCheck={false}
      className={textTextAreaCss}
      defaultValue={value}
      {...props}
    />
    <div className={textPlaceholderCss}>{placeholder}</div>
  </label>
);
