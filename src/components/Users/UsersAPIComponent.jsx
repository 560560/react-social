import React from 'react';
import * as axios from "axios";
import ava_null from "../../assets/images/ava_null.png"
import Users from "./Users";

class UsersAPIComponent extends React.Component {

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


    return <Users ava_null={ava_null} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                  users={this.props.users} unfollowFrom = {this.props.unfollowFrom} followTo = {this.props.followTo}/>
  };

}

export default UsersAPIComponent;