import { useContext } from "react"
import { CounterContext, type ContextValueType } from "../providers/CounterProvider"

export const useCounter = () => {
    const response = useContext(CounterContext);
    return response as ContextValueType;
}