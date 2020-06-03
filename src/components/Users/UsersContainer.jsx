import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreater, unfollowActionCreater} from "../../redux/users-reducer";


let mapStateToProps = (state) =>{

  return {
    users: state.usersPage.users
  }

}
let mapDispatchToProps = (dispatch) =>{
  return{
    followTo: (userID) => {
      let action = followActionCreater(userID);
      dispatch(action);
    },
    unfollowFrom: (userID) => {
      let action = unfollowActionCreater(userID);
      dispatch(action);
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;