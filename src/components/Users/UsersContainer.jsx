import React from 'react';
import {connect} from "react-redux";
import {
    followTo,
    setUsers,
    unfollowFrom,
    clearUsers, setUsersCount, setCurrentPage, toggleIsFetching
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import ava_null from "../../assets/images/ava_null.png";
import spinner from "../../assets/images/spinner.gif";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.props.clearUsers();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount);
            })

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        this.props.clearUsers();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })

    }


    render() {
        return (
            <Users ava_null={ava_null}
                   spinner={spinner}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   unfollowFrom={this.props.unfollowFrom}
                   followTo={this.props.followTo}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}/>
        )
    };
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

export default connect(mapStateToProps, {
    followTo, unfollowFrom, setUsers, clearUsers, setUsersCount, setCurrentPage, toggleIsFetching
})(UsersContainer);