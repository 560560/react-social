import {connect} from "react-redux";
import Navbar from "./Navbar";
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    friendsData: state.sidebar.friendsData
  }
}

export default  compose(
    connect(mapStateToProps, {}))
(Navbar);