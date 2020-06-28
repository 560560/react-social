import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage, getUsers, follow, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import ava_null from "../../assets/images/ava_null.png";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {pageSize, currentPage, getUsers} = this.props
        getUsers(pageSize, currentPage)

    };

    onPageChanged = (number, index) => {
        const {setCurrentPage, pageSize, getUsers} = this.props
        setCurrentPage({number, index})
        getUsers(pageSize, number)
    }


    render() {
        return (
            <Users ava_null={ava_null}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>

        )
    };
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentPage, getUsers, follow, unfollow}))
(UsersContainer);