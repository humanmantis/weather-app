import { combineReducers } from "redux";
import { search } from "./search";
import { forecast } from "./forecast";


export default combineReducers({
    forecast,
    search
})
