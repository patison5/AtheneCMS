import React, { Fragment  } from 'react'
import UsersList from '../containers/usersList'
import UserDetails from '../containers/usersDetails'

const Users = () => {
    return <div>
        <UsersList />
        <UserDetails />
    </div>
}

export default Users;
