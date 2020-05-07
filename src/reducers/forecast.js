import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { forecastRequest, forecastSuccess, forecastFailure } from "../actions/forecast";

const city = handleActions({
    [forecastRequest.toString()]: (_state, action) => action.payload
}, '')

const data = handleActions({
    [forecastSuccess.toString()]: (_state, action) => action.payload.forecast.forecastday
}, []);

const isLoading = handleActions({
    [forecastRequest.toString()]: () => true,
    [forecastSuccess.toString()]: () => false,
    [forecastFailure.toString()]: () => false
}, false)

const error = handleActions({
    [forecastFailure.toString()]: () => true,
    [forecastSuccess.toString()]: () => false
}, false)

export const forecast = combineReducers({
  city,
  data,
  isLoading,
  error,
});
