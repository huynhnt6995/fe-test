import { ChangeEventHandler } from "react";

interface Props {
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

function Input({ label, value, onChange, className }: Props) {
  return (
    <div className={`flex items-center ${className || ""}`}>
      {label && <label className="text-gray-400 mr-2">{label}:</label>}
      <input
        className="text-black text-sm py-1 px-3 border rounded border-solid border-gray-400 hover:border-primary-500 focus:outline-primary-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
