import MyPosts from "./MyPosts";
import {addPostActionCreater} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    postTextArea: state.profilePage.postTextArea,
    postsData: state.profilePage.postsData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      let action = addPostActionCreater(postText);
      dispatch(action);
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;