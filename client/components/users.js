import React, { Fragment  } from 'react'
import UsersList from '../containers/usersList'
import UserDetails from '../containers/usersDetails'
import Header from './layout/Header'

const Users = () => {
    return (
        <div className="main-content__wrap">
            <Header />
        
            <div className="main-content">
                <UsersList />
                <UserDetails />
            </div>
        </div>
    )
}

export default Users;
