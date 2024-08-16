interface InputProps {
    onChange: (value: string) => void;
    type?: string;
    value?: string;
    label?: string;
}

export const Input = ({ onChange, type = "text", value = "", label = "" }: InputProps) => (
    <label
        className="flex p-4 gap-4 items-center font-bold"
    >{label}<input
        className="bg-white text-black  text-base font-normal border border-gray-300 rounded-md px-2 py-2 outline-none"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    /></label>
);
