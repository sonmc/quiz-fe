import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './../sagas';
import rootReducers from './../reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
store.runSaga = sagaMiddleware.run;
export default store;