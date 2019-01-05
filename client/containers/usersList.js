import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SelectUser } from '../actions/index'

class UsersList extends Component {
    showUsers () {
        return this.props.users.map((user, index) => {
            return (
                <li onClick={() => this.props.selectUser(user)}  key={index}>{user.name} {user.surname}</li>
            )
        })
    }
    render () {
        return (
            <ol>
                {this.showUsers()}
            </ol>
        )
    }
}

function mapStateTpProps (state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        selectUser: SelectUser
    }, dispatch)
}

export default connect(mapStateTpProps, matchDispatchToProps)(UsersList);
