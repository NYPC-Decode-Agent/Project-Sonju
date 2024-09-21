interface InputProps {
  onChange: (value: string) => void;
  type?: string;
  value?: string;
  label?: string;
}

export const Input = ({
  onChange,
  type = 'text',
  value = '',
  label = '',
}: InputProps) => (
  <label className="flex items-center gap-4 p-4 font-bold">
    {label}
    <input
      className="rounded-md border border-gray-300 bg-white px-2 py-2 text-base font-normal text-black outline-none"
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);
