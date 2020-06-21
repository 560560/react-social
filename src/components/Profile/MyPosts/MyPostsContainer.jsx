import MyPosts from "./MyPosts";
import {addPostActionCreater} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {getPostsDataSelector} from "../../../redux/profileSelectors";




let mapStateToProps = (state) => {
  return {
    postsData: getPostsDataSelector(state)
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