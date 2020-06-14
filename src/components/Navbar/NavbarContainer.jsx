import {connect} from "react-redux";
import Navbar from "./Navbar";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    friendsData: state.sidebar.friendsData
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default  compose(connect(mapStateToProps, mapDispatchToProps))(Navbar);