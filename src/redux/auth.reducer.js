import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initial = {
    id: null, 
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
};

export let setUserData = (id, email, login, isAuth) => { return { type: SET_USER_DATA, data: {id, email, login, isAuth } }};

export let Auth = () => async (dispatch) => {
       let response = await AuthAPI.Auth();
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true))
            }
};

export let LogIn = (email, password, rememberMe) => async (dispatch) => {
        let response = await AuthAPI.Login(email, password, rememberMe);
            if (response.data.resultCode === 0) {
                dispatch(Auth())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0]: 'Some error';
                dispatch(stopSubmit('login', {_error: message}))
            }
};

export let LogOut = () => async (dispatch) => {
        let response = await AuthAPI.Logout()
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
}

export default authReducer;