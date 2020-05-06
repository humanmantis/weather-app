import { takeLatest } from 'redux-saga/effects';
import fetchForecast from './fetchForecast';
import { forecastRequest } from '../actions/forecast';

export default function* () {
    yield takeLatest(forecastRequest.toString(), fetchForecast);
}