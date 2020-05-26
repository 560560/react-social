let state = {
  profilePage: {
    postsData: [
      {id: 1, message: 'Hi, how are you?', likesCount: 15},
      {id: 2, message: "It's my first post", likesCount: 20}

    ]
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: "Anton", avatar: "http://9878621572.myjino.ru/img/ava_1.jpg"},
      {id: 2, name: "Elena", avatar: "http://9878621572.myjino.ru/img/ava_2.jpg"},
      {id: 3, name: "Mihail", avatar: "http://9878621572.myjino.ru/img/ava_3.jpg"},
      {id: 4, name: "Kseniya", avatar: "http://9878621572.myjino.ru/img/ava_4.jpg"}
    ],
    messagesData: [
      {id: 1, owner: true, message: "I'm OK! How is your IT-KAMASUTRA", date: "29 March 13:13"},
      {id: 2, owner: false, message: "How are you?", date: "28 March 2020 10:27"},
      {id: 3, owner: true, message: "Hi?", date: "28 March 2020 00:59"},
      {id: 4, owner: true, message: "Thanks!!!", date: "04 January 2020 00:24"},
      {id: 5, owner: false, message: "Best Regards!", date: "03 January 2020 06:54"}
    ]
  }

}
export default state;