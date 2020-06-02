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

    case ADD_POST: {
      let stateCopy = {...state}
      let newPost = {
        id: 2,
        message: stateCopy.postTextArea,
        likesCount: 0
      };
      stateCopy.postsData = [...state.postsData]
      if (stateCopy.postTextArea === "") {
        return state;
      }
      stateCopy.postsData.push(newPost);
      stateCopy.postTextArea = "";
      return stateCopy;
    }
    case UPDATE_TEXTAREA_MY_POSTS_DATA: {
      let stateCopy = {...state}
      stateCopy.postTextArea = action.messageText;
      return stateCopy;
    }
    default : {
      let stateCopy = {...state}
      return stateCopy;
    }
  }

}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateTextareaMyPostsDataActionCreater = (messageText) => {
  return {type: UPDATE_TEXTAREA_MY_POSTS_DATA, messageText: messageText}
};

export default profileReducer;
