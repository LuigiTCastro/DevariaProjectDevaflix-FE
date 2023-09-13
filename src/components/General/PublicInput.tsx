import { useState } from "react";

type InputProps = {
    icon: string,
    alt: string,
    name: string,
    type: string,
    placeholder: string,
    modelValue: string,
    setValue(s:string): void
}

export const PublicInput: React.FC<InputProps> = ({icon, alt, type, name, placeholder, modelValue, setValue }) => {
    const [focus, setFocus] = useState(false);

    return (
        <div className={"input " + (focus ? 'focus' : '')}>
            <img src={icon} alt={alt} />
            <input type={type} name={name} placeholder={placeholder}
            value={modelValue}
            onChange={e => setValue(e.target.value)}
            onFocus={e => setFocus(true)}
            onBlur={e => setFocus(false)}/>
        </div>
    );
}