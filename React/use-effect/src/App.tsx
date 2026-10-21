// useEffect; -> LifeCycle, side Effect -> API Calling, Events, Timers

import { useEffect, useState } from "react"

//

type Product = {
    title: string;
    images: string[];
}

export const App = () => {

    const [counter1, setCounter1] = useState<number>(0);
    const [counter2, setCounter2] = useState<number>(0);
    const [timer, setTimer] = useState<number>(0);
    const [productId, setProductId] = useState<number>(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    // useEffect(() => {
    //     console.log("Mounted"); // Mounting, update, unmounting
    //     return () => {
    //         console.log("Unmounted");
    //     }
    // }, [counter2]);

    const handleFetch = async () => {
        try {
            setIsFetching(true);
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const data = await response.json();
            setProduct(data);
        } catch (err) {
            return console.log(err);
        } finally {
            setIsFetching(false);
        }
    }

    useEffect(() => {
        handleFetch();
    }, [productId]);

    const generateRandomNumber = () => Math.floor(Math.random() * 194) + 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [counter1]);

    return <div className="flex justify-center h-screen items-center flex-col gap-3">
        <div>Counter 1: {counter1}</div>
        <div>Counter 2: {counter2}</div>
        <div>Timer: {timer}</div>
        {
            isFetching ? <>
                <div className="h-96 w-96 bg-slate-300/30 rounded-md">
                    
                </div>
                <h1 className="h-4 w-96 bg-slate-300/30 rounded-md"></h1>
            </> : <>
                <div className="h-96 w-96">
                    <img src={product?.images[0]} alt={product?.title} className="h-full w-full" />
                </div>
                <h1>Prod Title: {product?.title}</h1>
            </>
        }
        <button onClick={() => setProductId(generateRandomNumber())}>Random Product</button>
        <div className="flex gap-2">
            <button onClick={() => setCounter1(counter1 + 1)} className="bg-emerald-700 p-2 px-4 rounded-md text-white min-w-30">Click 1</button>
            <button onClick={() => setCounter2(counter2 + 1)} className="bg-red-700 p-2 px-4 rounded-md text-white min-w-30">Click 2</button>
        </div>
    </div>
}