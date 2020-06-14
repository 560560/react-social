import Dialogs from "./Dialogs";
import {sendMessageActionCreater, updateTextareaMessagesActionCreater} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData,
        messageTexArea: state.dialogsPage.messageTexArea
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        messageChange: (messageText) => {
            let action = updateTextareaMessagesActionCreater(messageText);
            dispatch(action);
        },
        sendMessage: () => {
            let action = sendMessageActionCreater();
            dispatch(action);
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
