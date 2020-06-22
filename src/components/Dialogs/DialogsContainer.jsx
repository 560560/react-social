import Dialogs from "./Dialogs";
import {sendMessageActionCreater} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsDataSelector, getMessagesDataSelector, getMessageTexAreaSelector} from "../../redux/dialogsSelectors";

let mapStateToProps = (state) => {
    return {
        messagesData: getMessagesDataSelector(state),
        dialogsData: getDialogsDataSelector(state),
        messageTexArea: getMessageTexAreaSelector(state)
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

        sendMessage: (messageText) => {
            let action = sendMessageActionCreater(messageText);
            dispatch(action);
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
