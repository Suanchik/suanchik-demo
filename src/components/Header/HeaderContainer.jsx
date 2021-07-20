import { connect } from 'react-redux';
import React from 'react';
import Header from './Header';
import { LogOut } from '../../redux/auth.reducer';


class HeaderContainer extends React.Component {
    render() {
        return (
            <>
               <Header {...this.props}/>
            </>
        )
    }
} 



let MapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
};


export default  connect(MapStateToProps, { LogOut })(HeaderContainer);

