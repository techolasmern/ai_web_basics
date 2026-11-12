import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { decrement, increment } from "../redux/slices/counter.slice";

export const ReduxPage = () => {

    const { value } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();


    return <div className="flex justify-center p-6 items-center flex-col gap-5 text-white">
        <h1 className="text-3xl font-bold underline uppercase text-slate-200">Redux - State Management</h1>
        <div>
            value: {value}
        </div>
        <button className="bg-emerald-700 p-2 px-4 text-white rounded" onClick={() => {
            dispatch(increment({ value: 1 }));
        }}>+</button>
        <button className="bg-emerald-700 p-2 px-4 text-white rounded" onClick={() => {
            dispatch(decrement({ value: 1 }))
        }}>-</button>
    </div>
};