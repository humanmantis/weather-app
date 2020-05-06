import { createActions } from "redux-actions";

export const { forecastRequest, forecastSuccess, forecastFailure } = createActions(
  "FORECAST_REQUEST",
  "FORECAST_SUCCESS",
  "FORECAST_FAILURE"
);