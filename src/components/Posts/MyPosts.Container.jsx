import { connect } from 'react-redux';
import { addPostAC, deletePostAC } from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import React from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class MyPostsContainer extends React.Component {

    render() {
        return (
            <>
                <MyPosts {...this.props} />
            </>
        )
    }
}


let MapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.posts,
        dispatch: state.ProfilePage.dispatch,
        newPLetter: state.ProfilePage.newPLetter
    }
};

let MapDispatchToProps = (dispatch) => {
    return {
        addPostC(postBody) {
            dispatch(addPostAC(postBody))
        },
        deletePost(id) {
            dispatch(deletePostAC(id))
        }
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(MyPostsContainer);;