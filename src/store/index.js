import { createStore, combineReducers, applyMiddleware } from "redux";
import userdataReducer from "./UserData/UserData.reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  userdata: userdataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
