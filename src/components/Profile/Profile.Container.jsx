import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { getProfile, getUserStatus, setUserProfile, upDataStatus } from '../../redux/profileReducer';
import MyPostsContainer from '../Posts/MyPosts.Container';
import Profile from './Profile';
import classes from './Profile.module.css';

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.isAuthId
            if (!userId) {
                this.props.history.push('/Login')
            }
        }
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            let userId = this.props.match.params.userId;
            if (!userId) {
                userId = this.props.isAuthId
                if (!userId) {
                    this.props.history.push('/Login')
                }
            }
            this.props.getProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    render() {
        return (
            <div className={classes.Profile}>
                <Profile {...this.props} />
                <MyPostsContainer />
            </div>
        )
    }
};

let MapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        isAuthId: state.Auth.id,
        isAuth: state.Auth.isAuth
    }
}

export default compose(
    connect(MapStateToProps, { getProfile, getUserStatus, upDataStatus }),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
