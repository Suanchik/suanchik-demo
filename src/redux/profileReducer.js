import { ProfileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = "DELETE_POST"


let initial = {
    posts: [
        {message: 'Фактам плевать на ваши чувства', likes: 'Нравится: 100', id: '1'},
        {message: 'Пока ты бегаешь за женщиной, она, бегает за мужчиной, который бегает за своей мечтой', likes: 'Нравится: 150', id: '2'},
        {message: 'Ты гавно либо гений, среднего не дано', likes: 'Нравится: 100', id: '3'}
    ],
    profile: null,
    status: '',
}

let profileReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPLetter: '',
                posts: [{message: action.postBody, likes: 'Нравится: 3'}, ...state.posts]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }    
        default:
            return state;
    }
};

export let setUserProfile  = (profile) => { return { type: SET_USER_PROFILE, profile } }
export let addPostAC       = (postBody) => { return { type: ADD_POST, postBody} }
export let deletePostAC    = (postId) => { return { type: DELETE_POST, postId} }
export let setStatus       = (status) => { return {type: SET_STATUS, status} }

export let getProfile = (userId) => async (dispatch) => {
        let response = await ProfileAPI.getProfile(userId);
            dispatch(setUserProfile(response.data))
}

export let getUserStatus = (userId) => async (dispatch) => {
       let response = await ProfileAPI.getStatus(userId);
            dispatch(setStatus(response.data))
}

export let upDataStatus = (status) => async (dispatch) => {
        let response = await ProfileAPI.updateStatus(status);
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}



export default profileReducer;