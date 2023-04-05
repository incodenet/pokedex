import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import {all} from 'redux-saga/effects';
import {appReducer} from './app';
import {appSaga} from './app/sagas';

const sagas = [appSaga];

const reducers = {
  app: appReducer,
};

const saga = function* () {
  yield all(sagas.map(saga => saga()));
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const reducer = combineReducers(reducers);
const store = configureStore({reducer, middleware});

sagaMiddleware.run(saga);

export {store};
