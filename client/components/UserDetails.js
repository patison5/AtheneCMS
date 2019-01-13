import React, { Fragment  } from 'react'
import Header from './layout/Header'

const UserDetails = (props) => {
        console.log('hello world')
        console.log(props)

    const id = props.match.params.id;
    return (
        <div className="main-content__wrap">
            <Header />
        
            <div className="main-content">
                user details - {id}
            </div>
        </div>
    )
}

export default UserDetails;
