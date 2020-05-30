const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_TEXTAREA_MY_POSTS_DATA = "UPDATE-TEXTAREA-MY-POSTS-DATA";
const UPDATE_TEXTAREA_MESSAGES = "UPDATE-TEXTAREA-MESSAGES";

export const addPostActionCreater = () => ({type: ADD_POST});
export const sendMessageActionCreater = () => ({type: SEND_MESSAGE});

export const updateTextareaMyPostsDataActionCreater = (messageText) => {
    return {type: UPDATE_TEXTAREA_MY_POSTS_DATA, messageText: messageText}
};

export const updateTextareaMessagesActionCreater = (messageText) => {
    return {type: UPDATE_TEXTAREA_MESSAGES, messageText: messageText}
};


let store = {
    _state: {
        profilePage: {
            postTextArea: "",
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 20}

            ]
        },
        dialogsPage: {
            messageTexArea: "",
            dialogsData: [
                {id: 1, name: "Anton", avatar: "http://9878621572.myjino.ru/img/ava_1.jpg"},
                {id: 2, name: "Elena", avatar: "http://9878621572.myjino.ru/img/ava_2.jpg"},
                {id: 3, name: "Mihail", avatar: "http://9878621572.myjino.ru/img/ava_3.jpg"},
                {id: 4, name: "Kseniya", avatar: "http://9878621572.myjino.ru/img/ava_4.jpg"},
                {id: 5, name: "Maya", avatar: "http://9878621572.myjino.ru/img/ava_5.jpg"}
            ],
            messagesData: [
                {
                    id: 1,
                    owner: true,
                    ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
                    apponentsName: "Mihail",
                    apponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
                    message: "I'm OK! How is your IT-KAMASUTRA",
                    date: "29 March 13:13"
                },
                {
                    id: 2,
                    owner: false,
                    ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
                    apponentsName: "Mihail",
                    apponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
                    message: "How are you?",
                    date: "28 March 2020 10:27"
                },
                {
                    id: 3,
                    owner: true,
                    ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
                    apponentsName: "Mihail",
                    apponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
                    message: "Hi!",
                    date: "28 March 2020 00:59"
                },
                {
                    id: 4,
                    owner: true,
                    ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
                    apponentsName: "Mihail",
                    apponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
                    message: "Thanks!!!",
                    date: "04 January 2020 00:24"
                },
                {
                    id: 5,
                    owner: false,
                    ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
                    apponentsName: "Mihail",
                    apponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
                    message: "Best Regards!",
                    date: "03 January 2020 06:54"
                }
            ]
        },
        siteBar: {
            friendsData: [
                {id: 1, friendsName: "Mihail", avatar: "http://9878621572.myjino.ru/img/ava_3.jpg"},
                {id: 2, friendsName: "Kseniya", avatar: "http://9878621572.myjino.ru/img/ava_4.jpg"},
                {id: 3, friendsName: "Maya", avatar: "http://9878621572.myjino.ru/img/ava_5.jpg"}
            ]
        }
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        if (action.type === ADD_POST) {
            if (this._state.profilePage.postTextArea === "") {
                return
            }
            let newPost = {
                id: 2,
                message: this._state.profilePage.postTextArea,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.postTextArea = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            if (this._state.dialogsPage.messageTexArea === "") {
                return
            }
            let newMessage = {
                id: 6,
                owner: true,
                ownerAva: "http://9878621572.myjino.ru/img/ava_1.jpg",
                apponentsName: "Mihail",
                apponentsAva: "http://9878621572.myjino.ru/img/ava_3.jpg",
                message: this._state.dialogsPage.messageTexArea,
                date: "Date()"
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.messageTexArea = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_TEXTAREA_MY_POSTS_DATA) {
            this._state.profilePage.postTextArea = action.messageText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_TEXTAREA_MESSAGES) {
            this._state.dialogsPage.messageTexArea = action.messageText;
            this._callSubscriber(this._state)
        }
    }
}

window.store = store;
export default store;