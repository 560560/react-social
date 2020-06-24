import React from 'react';
import s from './Users.module.css';
import Preloader from "../Common/Preloader/Preloader";
import User from "./User";
import Paginator from "../Common/Paginator/Paginator";


const Users = ({ totalUsersCount, pageSize, users, currentPage, onPageChanged,
                   isFetching, ava_null, unfollow, follow, followingInProgress }) => {

    let usersList = users.map(u => <User key={u.id} user={u} ava_null={ava_null} unfollow={unfollow}
                                         follow={follow} followingInProgress={followingInProgress}/>)


    return (<div className={s.users}>

            <Paginator pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}/>

            {isFetching ? <Preloader/> : usersList}

        </div>
    )

}

export default Users;