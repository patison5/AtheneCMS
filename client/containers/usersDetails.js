import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render () {
        if (!this.props.user) {
            return <div>Выберите пользователя</div>
        }
        return (
            <div>
                <ul>
                    <li>{this.props.user.name}</li>
                    <li>{this.props.user.surname}</li>
                </ul>
            </div>
        )
    }
}

function mapStateTpProps (state) {
    return {
        user: state.activeUser
    }
}


export default connect(mapStateTpProps)(UserDetails);
