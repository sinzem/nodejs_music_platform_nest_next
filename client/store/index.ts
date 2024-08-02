import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore, Store } from "redux";
import { reducer, RootState } from "./reducers";

/* (создаем store, подключаем в него редьюсер, типизируем(не путать импортируемые сущности - названия пересекаются в redux и next-redux-wrapper)) */
const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true})