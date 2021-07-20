import authReducer from "./auth.reducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMeddlewara from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer";
const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    UsersPage: usersReducer,
    Auth: authReducer,
    form: formReducer,
    App: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMeddlewara));

export default store;