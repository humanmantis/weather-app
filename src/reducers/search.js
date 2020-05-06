import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { searchRequest, searchSuccess, searchFailure } from "../actions/search";

const cities = handleActions({
    [searchRequest.toString()]: (_state, action) => action.payload
}, []);

const isLoading = handleActions({
    [searchRequest.toString()]: () => true,
    [searchSuccess.toString()]: () => false,
    [searchFailure.toString()]: () => false
}, false)

const error = handleActions({
    [searchFailure.toString()]: (_state, action) => action.error
}, null)

export const search = combineReducers({
  cities,
  isLoading,
  error,
});
