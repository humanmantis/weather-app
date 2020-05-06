import { put, call } from "redux-saga/effects";
import getForecast from "../api/forecast";
import {
  forecastSuccess,
  forecastFailure,
} from "../actions/forecast";

export default function* (action) {
  try {
    const result = yield call(getForecast, action.payload);
    yield put(forecastSuccess(result));
  } catch (error) {
    yield put(forecastFailure(error));
  }
}
