import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sitebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

window.store = store;
export default store;