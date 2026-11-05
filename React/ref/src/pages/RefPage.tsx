import { useRef } from "react";

export const RefPage = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            // inputRef.current.style.backgroundColor = "red"
            // inputRef.current.style.padding = "3px";
        }
    }

    return <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Click</button>
    </div>
};