import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {loginMe} from "../../redux/auth-reducer";

let mapStateToProps =  (state) => {
  return {

  }
}
export default connect(mapStateToProps, {loginMe})(Login)