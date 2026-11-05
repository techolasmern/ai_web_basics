import { useEffect, useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import type { ApiResponse } from "../types/comments";

export const RefPage = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [response] = useFetch<ApiResponse>("/comments");
    const moveRef = useRef<HTMLDivElement | null>(null);
    const moveRef2 = useRef<HTMLDivElement | null>(null);
    const moveRef3 = useRef<HTMLDivElement | null>(null);

   

    useEffect(() => {

        const handleMove = (e: MouseEvent) => {
            if (moveRef.current && moveRef2.current && moveRef3.current) {
                moveRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                moveRef2.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                moveRef3.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
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

        <div className="w-10 h-10 bg-red-700 fixed -top-4 -left-4 rounded-full duration-300 transition-all ease-linear" ref={moveRef}>
            <img src="./image.png" alt="cf" className="h-full w-full overflow-hidden rounded-full"/>
        </div>
        <div className="w-10 h-10 bg-red-700 fixed -top-4 -left-4 rounded-full duration-600 transition-all ease-linear" ref={moveRef2}>
            <img src="./image.png" alt="cf" className="h-full w-full overflow-hidden rounded-full" />
        </div>
        <div className="w-10 h-10 bg-red-700 fixed -top-4 -left-4 rounded-full duration-900 transition-all ease-linear" ref={moveRef3}>
            <img src="./image.png" alt="cf" className="h-full w-full overflow-hidden rounded-full" />
        </div>
    </div>
};