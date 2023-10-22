import { SetStateAction } from "react";

interface StatefulInputBoxProps {
    label: string;
    textValue: string;
    setValue: (value: SetStateAction<string>) => void;
}

function StatefulInputBox({label, textValue, setValue}: StatefulInputBoxProps) {
    return (
            <input
                placeholder={label}
                type="text"
                name="name"
                onChange={(ev) => setValue(ev.target.value)}
                value={textValue}
            />
    )
}

export default StatefulInputBox 