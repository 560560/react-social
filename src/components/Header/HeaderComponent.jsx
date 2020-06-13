import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import  {setAuthUserData} from "../../redux/auth-reducer";
import {userAPI} from "../../api/api";


class HeaderContainer extends React.Component {

  componentDidMount() {
    userAPI.authorization().then(responce => {if (responce.resultCode === 0) {this.props.setUserData(responce.data);}})
  }

  render() {
    return (<Header {...this.props}/>);
  }

}

let mapStateToProps = (state) => ( {
    login: state.auth.login,
  isAuth: state.auth.isAuth
  })

export default connect(mapStateToProps, {setUserData: setAuthUserData})(HeaderContainer)

