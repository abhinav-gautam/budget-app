import * as entriesSaga from './entriesSaga';
// import * as testSaga from './testSaga';

export const initSagas = (sagaMiddleWare) => {
    Object.values(entriesSaga).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
    // Object.values(testSaga).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
}

