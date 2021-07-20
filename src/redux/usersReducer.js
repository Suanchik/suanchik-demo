import { UsersAPI } from "../api/api";
import { upDataObjectArray } from "../Utils/objehelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_PEOPLE';
const SET_CARRENT_PAGE = 'SET_CARRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGAL_FETCHING = 'TOGGAL_FETCHING';
const TOGGAL_IS_FOLLOWING_PROGRESS = 'TOGGAL_IS_FOLLOWING_PROGRESS';


let initial = {
    users: [],
    pageSise: 20,
    totalCount: 0,
    carrentPage: 1,
    isFetching: true,
    toggalIsFollowing: []
}


let usersReducer = (state = initial, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: upDataObjectArray(state.users, action.usersId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: upDataObjectArray(state.users, action.usersId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users = action.users]
            }
            
        case SET_CARRENT_PAGE:
           return {
               ...state,
               carrentPage: action.page
           }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
            
        case TOGGAL_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGAL_IS_FOLLOWING_PROGRESS: 
        return {
            ...state,
            toggalIsFollowing: action.isFetching ? [...state.toggalIsFollowing, action.usersId]
                                                 : state.toggalIsFollowing.filter(id => id != action.usersId)
        }
                 
        default:
            return state;
    }
};

export let followSuccess = (usersId) => { return {type: FOLLOW, usersId} };
export let unfollowSuccess = (usersId) => { return {type: UNFOLLOW, usersId} };
export let setUsers = (users) => { return {type: SET_USERS, users} };
export let setCurrentPage = (page) => { return {type: SET_CARRENT_PAGE, page} };
export let setTotalusersCount = (totalCount) => { return {type: SET_TOTAL_USERS_COUNT, totalCount} };
export let setToggal = (isFetching) => { return {type: TOGGAL_FETCHING, isFetching} };
export let toggalIsFollowingProgress = (isFetching, usersId) => { return {type: TOGGAL_IS_FOLLOWING_PROGRESS, isFetching, usersId} };

export let getUsersThunkCreater = (carrentPage, pageSise) => {
    return (dispatch) => {
        dispatch(setToggal(true))
        UsersAPI.getUsers(carrentPage, pageSise).then(response => {
            dispatch(setCurrentPage(carrentPage))
            dispatch(setUsers(response.data.items))
            dispatch(setTotalusersCount(response.data.totalCount))
            dispatch(setToggal(false))
        })
    }
};

let followUnfollow = async (dispatch, usersId, apiMethod, actionCreater) => {
    dispatch(toggalIsFollowingProgress(true, usersId))
    let response = await  apiMethod(usersId)
    if (response.data.resultCode == 0) {
                dispatch(actionCreater(usersId))
            }
            dispatch(toggalIsFollowingProgress(false, usersId))
}

export let UnFollowThunkCreater = (usersId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, usersId, UsersAPI.UnFollow.bind(UsersAPI), unfollowSuccess)
    }
}

export let FollowThunkCreater = (usersId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, usersId, UsersAPI.Follow.bind(UsersAPI), followSuccess)
    }
}
export default usersReducer;