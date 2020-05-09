import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { forecastRequest, forecastSuccess, forecastFailure } from "../actions/forecast";

const data = handleActions({
    [forecastSuccess.toString()]: (_state, action) => ({
        location: action.payload.location,
        forecastday: action.payload.forecast.forecastday})
}, {});

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
  data,
  isLoading,
  error,
});
