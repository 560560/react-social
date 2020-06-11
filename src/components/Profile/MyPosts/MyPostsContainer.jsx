import MyPosts from "./MyPosts";
import {addPostActionCreater, updateTextareaMyPostsDataActionCreater} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    postTextArea: state.profilePage.postTextArea,
    postsData: state.profilePage.postsData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    postChange: (messageText) => {
      let action = updateTextareaMyPostsDataActionCreater(messageText);
      dispatch(action)
    },
    addPost: () => {
      let action = addPostActionCreater();
      dispatch(action);
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;