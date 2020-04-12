import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import pollsReducer from "./polls_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    polls: pollsReducer
});

export default entitiesReducer;