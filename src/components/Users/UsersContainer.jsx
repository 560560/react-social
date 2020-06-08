import React from 'react';
import {connect} from "react-redux";
import {
  followActionCreater,
  setUsersActionCreater,
  unfollowActionCreater,
  clearUsersActionCreater, setUsersCountActionCreater, setCurrentPageActionCreater
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import ava_null from "../../assets/images/ava_null.png";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.clearUsers();
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setUsersCount(response.data.totalCount)
      })
  };
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.clearUsers();
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setUsersCount(response.data.totalCount)
      })

  }
  render() {
    return <Users ava_null={ava_null}
                  totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  users={this.props.users}
                  unfollowFrom={this.props.unfollowFrom}
                  followTo={this.props.followTo}
                  currentPage={this.props.currentPage}
                  onPageChanged = {this.onPageChanged}/>
  };
}

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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);