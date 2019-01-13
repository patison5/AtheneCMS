import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
    render () {
        console.log('props', this.props)
        console.log(this.state)
        if (!this.props.user) {
            return <div>Выберите пользователя</div>
        }
        return (
            <div>
                <ul>
                </ul>
            </div>
        )
    }
}

function mapStateTpProps (state) {
    console.log('bim', state)
    return {
        user: state.setectedSingleUser
    }
}


export default connect(mapStateTpProps)(UserDetails);
