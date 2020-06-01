const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_MY_POSTS_DATA = "UPDATE-TEXTAREA-MY-POSTS-DATA";

let initialState = {
  postTextArea: "",
  postsData: [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20}

  ]
}



const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      if (state.postTextArea === "") {
        return state;
      }
      let newPost = {
        id: 2,
        message: state.postTextArea,
        likesCount: 0
      };
      state.postsData.push(newPost);
      state.postTextArea = "";
      return state;

    case UPDATE_TEXTAREA_MY_POSTS_DATA:
      state.postTextArea = action.messageText;
      return state;

    default :
      return state;
  }

}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateTextareaMyPostsDataActionCreater = (messageText) => {
  return {type: UPDATE_TEXTAREA_MY_POSTS_DATA, messageText: messageText}
};

export default profileReducer;
