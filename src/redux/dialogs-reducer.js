const SEND_MESSAGE = "dialogs-reducer/SEND-MESSAGE";


let initialState = {
  dialogsData: [
    {id: 1, name: "Anton", avatar: "https://social.reactlearning.ru/img/ava_1.jpg"},
    {id: 2, name: "Elena", avatar: "https://social.reactlearning.ru/img/ava_2.jpg"},
    {id: 3, name: "Mihail", avatar: "https://social.reactlearning.ru/img/ava_3.jpg"},
    {id: 4, name: "Kseniya", avatar: "https://social.reactlearning.ru/img/ava_4.jpg"},
    {id: 5, name: "Maya", avatar: "https://social.reactlearning.ru/img/ava_5.jpg"}
  ],
  messagesData: [
    {
      id: 1,
      owner: true,
      ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
      opponentsName: "Mihail",
      opponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
      message: "I'm OK! How is your IT-KAMASUTRA",
      date: "29 March 13:13"
    },
    {
      id: 2,
      owner: false,
      ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
      opponentsName: "Mihail",
      opponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
      message: "How are you?",
      date: "28 March 2020 10:27"
    },
    {
      id: 3,
      owner: true,
      ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
      opponentsName: "Mihail",
      opponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
      message: "Hi!",
      date: "28 March 2020 00:59"
    },
    {
      id: 4,
      owner: true,
      ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
      opponentsName: "Mihail",
      opponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
      message: "Thanks!!!",
      date: "04 January 2020 00:24"
    },
    {
      id: 5,
      owner: false,
      ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
      opponentsName: "Mihail",
      opponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
      message: "Best Regards!",
      date: "03 January 2020 06:54"
    }
  ]
}


const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SEND_MESSAGE: {
      if (action.messageText === "" || !action.messageText) {
        return state
      }
      let newMessage = {
        id: 6,
        owner: true,
        ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
        apponentsName: "Mihail",
        apponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
        message: action.messageText,
        date: "Date()"
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      }

    }
    default: {
      return state;
    }
  }
}


// Action Creators //
export const sendMessageActionCreater = (messageText) => {
  return {type: SEND_MESSAGE, messageText}
};


// Thunk Creators //

export default dialogsReducer;
