import {connect} from "react-redux";
import Login from "./Login";
import {loginMe} from "../../redux/auth-reducer";

let mapStateToProps =  (state) => {
  return {
  isAuth: state.auth.isAuth,
    wrongAuth: state.auth.wrongAuth,
    myId: state.auth.id
  }
}
export default connect(mapStateToProps, {loginMe})(Login)