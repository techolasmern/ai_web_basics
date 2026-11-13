import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { decrement, increment } from "../redux/slices/counter.slice";

export const ReduxPage = () => {

    // Typed hooks for select state from the store 
    const { value } = useAppSelector((state) => state.counter);

    const navigate = useNavigate();

    // Typed hooks for send actions to the store
    const dispatch = useAppDispatch();

    return <div className="flex justify-center p-6 items-center flex-col gap-5">
        <h1 className="text-3xl font-bold underline uppercase">Redux - State Management</h1>
        <div className="font-serif">
            value: {value} {/* Display the value from the store */}
        </div>
        <div className="flex gap-3">
            <button className="bg-red-700 cursor-pointer p-2 px-4 text-white rounded" onClick={() => {
                dispatch(decrement({ value: 1 })); // Dispatch decrement action
            }}>DECREMENT</button> {/* Dispatch decrement action with value 1 while click the button */}
            <button className="bg-emerald-700 cursor-pointer p-2 px-4 text-white rounded" onClick={() => {
                dispatch(increment({ value: 1 })) // Dispatch increment action
            }}>INCREMENT</button> {/* Dispatch increment action with value 1 while click the button */}
        </div>

        <button onClick={() => navigate("/todo")} className="bg-blue-700 cursor-pointer p-2 px-4 rounded text-white">
            Go to Todo
        </button>
    </div>
};