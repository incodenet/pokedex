import {takeEvery, all, call, put} from 'redux-saga/effects';
import {getPokedexAction} from './actions';
import {getPokedexService} from 'services/app';
import {setErrors, setPokedex, setLoading, setPokeCount} from './slice-app';
import {NameAndUrl} from 'types/api';

const getPokedexSaga = function* () {
  yield put(setLoading(true));

  try {
    const response: {data: {count: number; results: NameAndUrl[]}} = yield call(getPokedexService);

    yield put(setPokeCount(response.data.count));

    yield put(setPokedex(response.data.results));
  } catch (e) {
    yield put(setErrors(e as string));
  } finally {
    yield put(setLoading(false));
  }
};

export const appSaga = function* () {
  yield all([takeEvery(getPokedexAction().type, getPokedexSaga)]);
};
