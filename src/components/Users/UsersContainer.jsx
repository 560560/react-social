import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage, getUsers, follow, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import ava_null from "../../assets/images/ava_null.png";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(this.props.pageSize, pageNumber)
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

export default connect(mapStateToProps, {
    setCurrentPage, getUsers, follow, unfollow
})(UsersContainer);