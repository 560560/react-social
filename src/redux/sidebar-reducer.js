
let initialState = {
  friendsData: [
    {id: 1, friendsName: "Mihail", avatar: "https://social.reactlearning.ru/img/ava_3.jpg"},
    {id: 2, friendsName: "Kseniya", avatar: "https://social.reactlearning.ru/img/ava_4.jpg"},
    {id: 3, friendsName: "Maya", avatar: "https://social.reactlearning.ru/img/ava_5.jpg"}
  ]
}

const sidebarReducer = (state =initialState, action) => {

  switch (action) {
    default:
      return state;
  }

}

export default sidebarReducer;