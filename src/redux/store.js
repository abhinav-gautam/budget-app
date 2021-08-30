import { configureStore } from "@reduxjs/toolkit";
import entriesReducer from "./entriesSlice";
import entryReducer from "./entrySlice";
import createSagaMiddleware from 'redux-saga';
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]


export default configureStore({
    reducer: {
        entries: entriesReducer,
        entry: entryReducer
    },
    middleware: middlewares
})

initSagas(sagaMiddleware)