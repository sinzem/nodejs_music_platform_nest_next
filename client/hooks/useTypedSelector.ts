import { RootState } from "@/store/reducers";
import { TypedUseSelectorHook, useSelector  } from "react-redux";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
/* (кастомный хук для типизации useSelector(для получения данных из store)) */