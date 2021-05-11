import { fork } from 'redux-saga/effects'

import initSaga from './initSaga'

export default function* rootSaga() {
    yield fork(initSaga)
}