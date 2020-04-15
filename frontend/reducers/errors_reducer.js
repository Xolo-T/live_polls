import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import voteErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    vote: voteErrorsReducer
});

export default errorsReducer;