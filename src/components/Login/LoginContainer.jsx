import {connect} from "react-redux";
import Login from "./Login";
import {loginMe} from "../../redux/auth-reducer";
import {compose} from "redux";

let mapStateToProps =  (state) => {
  return {
  isAuth: state.auth.isAuth,
    wrongAuth: state.auth.wrongAuth,
    myId: state.auth.id,
    errorMessage: state.auth.errorMessage
  }
}
export default compose (connect(mapStateToProps, {loginMe}))
(Login)