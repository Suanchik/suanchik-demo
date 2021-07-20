import { connect } from 'react-redux';
import React from 'react';
import { FollowThunkCreater, getUsersThunkCreater, toggalIsFollowingProgress, UnFollowThunkCreater } from '../../redux/usersReducer';
import Users from './Users';
import Prilouder from '../coummon/Prilouder/Prilouder';
import { GetCarrentPage, GetIsFetching, GetPageSise, GetTotalCount, GetToggalIsFollowing, GetUsers } from '../../redux/users.selectors';


class UserAPI extends React.Component {

    componentDidMount = () => {
        this.props.getUsersThunkCreater(this.props.carrentPage, this.props.pageSise)
    }
    setCurrentPage = (page) => {
        this.props.getUsersThunkCreater(page, this.props.pageSise)
    }
    render() {
        return (
            <>
               {this.props.isFetching ? <Prilouder/> : null}
               <Users {...this.props} setCurrentPage = {this.setCurrentPage} />
            </>
        )
    }
} 


let MapStateToProps = (state) => {
    return {
        pageSise: GetPageSise(state),
        totalCount: GetTotalCount(state),
        users: GetUsers(state),
        carrentPage: GetCarrentPage(state),
        isFetching: GetIsFetching(state),
        toggalIsFollowing: GetToggalIsFollowing(state)
    }
};

const UsersContainer = connect(MapStateToProps, { toggalIsFollowingProgress, getUsersThunkCreater, FollowThunkCreater, UnFollowThunkCreater})(UserAPI);

export default UsersContainer;