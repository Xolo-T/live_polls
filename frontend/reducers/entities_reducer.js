import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import pollsReducer from "./polls_reducer";
import optionsReducer from "./options_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    polls: pollsReducer,
    options: optionsReducer
});

export default entitiesReducer;