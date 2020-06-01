const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_TEXTAREA_MESSAGES = "UPDATE-TEXTAREA-MESSAGES";

const dialogsReducer = (state, action) => {

  switch (action.type) {

    case SEND_MESSAGE:
      if (state.messageTexArea === "") {
        return state
      }
      let newMessage = {
        id: 6,
        owner: true,
        ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
        apponentsName: "Mihail",
        apponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
        message: state.messageTexArea,
        date: "Date()"
      }
      state.messagesData.push(newMessage);
      state.messageTexArea = "";
      return state

    case UPDATE_TEXTAREA_MESSAGES:
      state.messageTexArea = action.messageText;
      return state
    default:
      return state;

  }
}

export default dialogsReducer;