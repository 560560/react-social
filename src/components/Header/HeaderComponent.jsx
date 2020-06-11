import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import  {setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

  componentDidMount() {


    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(responce => {
      if (responce.data.resultCode === 0) {
        this.props.setUserData(responce.data.data);
        }
    })

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

