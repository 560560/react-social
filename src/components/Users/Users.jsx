import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import ava_null from "../../assets/images/ava_null.png"

class Users extends React.Component {

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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 10) {
                pages.push(i)
            } else if (i === pagesCount) {
                pages.push("...")
                pages.push(i)
            }

        }

        return <div>
            <div className={s.pagesCounter}>
                {pages.map(p => {
                    return <span className={(this.props.currentPage === p) ? s.selectedPage : s.page} key={p}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>
                        {p}</span>
                })}
            </div>
            {
                this.props.users.map(u =>
                    <div className={s.usersBlock} key={u.id}>
                        <div className={s.userAva_followButton}>
                            <div className={s.userAva}><img src={u.photos.small === null ? ava_null : u.photos.small}
                                                            alt=""/></div>
                            <div className={s.followUnfollowButton}>{u.followed ?
                                <button onClick={() => {
                                    this.props.unfollowFrom(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    this.props.followTo(u.id)
                                }}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userName}>{u.name}</div>
                            <div className={s.country}>{/*{u.location.country},*/}</div>
                            <div className={s.status}>{u.status}</div>
                            <div className={s.city}>{/*{u.location.city}*/}</div>
                        </div>
                    </div>)
            }
        </div>
    };

}

export default Users;