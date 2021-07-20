import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { addMessageAC } from '../../redux/messagesReducer';
import Messenger from './Messenger';



let MapStateToProps = (state) => {
    return {
        newMLetter: state.MessagesPage.newMLetter,
        dispatch: state.MessagesPage.dispatch,
        dialog: state.MessagesPage.dialog,
        messagesList: state.MessagesPage.messagesList
    }
};

let MapDispatchToProps = (dispatch) => {
    return {
        addMessageC (messageBody) {
            dispatch(addMessageAC(messageBody))
        }
    }
}

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Messenger)

