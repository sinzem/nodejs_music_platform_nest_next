import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
import { reducer, RootState } from "./reducers";
import { thunk } from "redux-thunk";

/* (создаем store, подключаем в него редьюсер, типизируем(не путать импортируемые сущности - названия пересекаются в redux и next-redux-wrapper) - взято из документации) */
const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer, applyMiddleware(thunk)); /* (подключаем thunk в мидлверы для запросов на сервер) */

/* (создаем обложку для приложения, подключаем в нее store и экспортируем в pages/_app.tsx) */
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true})