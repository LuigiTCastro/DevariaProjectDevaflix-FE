import { useState } from "react";

//campos pra ser dinamico

type InputProps = {
  icon: string;
  alt?: string;
  name: string;
  type: string;
  placeholder: string;
  modelValue: string;
  setValue(s: string): void;
};
//paramentro de entrada
export const PublicInput: React.FC<InputProps> = ({
  icon,
  alt,
  type,
  name,
  placeholder,
  modelValue,
  setValue,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={"input " + (focus ? "focus" : "")}>
      <img src={icon} alt={alt} />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={modelValue}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};
