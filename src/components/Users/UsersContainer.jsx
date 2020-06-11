import React from 'react';
import {connect} from "react-redux";
import {
    followTo,
    setUsers,
    unfollowFrom,
    clearUsers, setUsersCount, setCurrentPage, toggleIsFetching
} from "../../redux/users-reducer";
import Users from "./Users";
import ava_null from "../../assets/images/ava_null.png";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.props.clearUsers();
        getUsers(this.props.pageSize, this.props.currentPage)
          .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
            })

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        this.props.clearUsers();
        getUsers(this.props.pageSize, pageNumber)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setUsersCount(data.totalCount)
            })

    }


    render() {
        return (
            <Users ava_null={ava_null}
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