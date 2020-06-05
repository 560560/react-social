import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreater, setUserdActionCreater, unfollowActionCreater} from "../../redux/users-reducer";


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
    },
    setUsers: (users) => {
      dispatch(setUserdActionCreater(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;