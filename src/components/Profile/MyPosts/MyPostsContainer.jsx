import MyPosts from "./MyPosts";
import {addPostActionCreater} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {getPostsDataSelector} from "../../../redux/profileSelectors";
import {compose} from "redux";




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


export default compose (connect(mapStateToProps, mapDispatchToProps))(MyPosts)