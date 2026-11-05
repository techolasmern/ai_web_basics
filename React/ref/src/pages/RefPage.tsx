import { useEffect, useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import type { ApiResponse } from "../types/comments";

export const RefPage = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [response] = useFetch<ApiResponse>("/comments");
    const moveRef = useRef<HTMLDivElement | null>(null);

   

    useEffect(() => {

        const handleMove = (e: MouseEvent) => {
            if (moveRef.current) {
                moveRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        }
       
        document.addEventListener("mousemove", handleMove);

        return () => {
            document.removeEventListener("mousemove", handleMove);
        }
    }, []);

    if (response.loading) {
        return <div>Loading...</div>
    }

    if (response.error) {
        return <div>{JSON.stringify(response.error)}</div>
    }



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
        <div>{response.data?.comments[3].body}</div>

        <div className="w-3 h-3 bg-red-700 fixed top-0 left-0 duration-300 transition-all ease-linear" ref={moveRef}></div>
    </div>
};