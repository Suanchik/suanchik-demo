import { createSelector } from "reselect";

const GetUsersSelector = (state) => {
    return state.UsersPage.users;
};

export const GetUsers = createSelector(GetUsersSelector, (users) => {
    return users.filter(user => true)
})


export const GetTotalCount = (state) => {
    return state.UsersPage.totalCount
};

export const GetPageSise = (state) => {
    return state.UsersPage.pageSise
};

export const GetCarrentPage = (state) => {
    return state.UsersPage.carrentPage
};

export const GetIsFetching = (state) => {
    return state.UsersPage.isFetching
};

export const GetToggalIsFollowing = (state) => {
    return state.UsersPage.toggalIsFollowing
}