import { memo } from "react";

export const Child = memo(({ onClick }: { onClick: () => void; }) => {

    console.log("Child rendered");

    return <div><button onClick={onClick}>Click</button></div>
})