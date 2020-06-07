import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
  followActionCreater,
  setUsersActionCreater,
  unfollowActionCreater,
  clearUsersActionCreater, setUsersCountActionCreater, setCurrentPageActionCreater
} from "../../redux/users-reducer";


let mapStateToProps = (state) =>{

  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
      dispatch(setUsersActionCreater(users))
    },
    clearUsers: () => {
      dispatch(clearUsersActionCreater())
    },
    setUsersCount: (users) => {
      dispatch(setUsersCountActionCreater(users))
    },
    setCurrentPage: (pageNumber) => {

      dispatch(setCurrentPageActionCreater(pageNumber))
    }

  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;