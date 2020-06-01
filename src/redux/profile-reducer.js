const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_MY_POSTS_DATA = "UPDATE-TEXTAREA-MY-POSTS-DATA";

const profileReducer = (state, action) => {

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

export default profileReducer;