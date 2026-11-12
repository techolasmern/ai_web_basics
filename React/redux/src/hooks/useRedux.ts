import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "../redux/store";

// Typed hooks for useDispatch and useSelector (Use them in components instead of useDispatch and useSelector directly)
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();