import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SelectUser, SelectAdmins } from '../actions/index'

//tmp
import initialUsers from '../reducers/users'


class UsersList extends Component {
    showUsers () {
        if (this.props.activeUsers) {
            return this.props.activeUsers.map((user, index) => {
                return (
                    <tr key={index}>
                        <td>{user.name} {user.surname}</td>
                        <td>{user.email}</td>
                        <td>{user.login}</td>
                        <td>{user.registration_date}</td>
                        <td>{user.role}</td>
                        <td>
                            <a className="btn btn-red" href="#">delete</a>
                            <a className="btn btn-blue" href="#">change</a>
                            <a className="btn btn-orange" href="#" onClick={() => this.props.selectUser(user)} >info</a>
                        </td>
                    </tr>
                )
            })
        }
        if (!this.props.users)
            return <tr><td>Список пуст</td></tr>

        return this.props.users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.name} {user.surname}</td>
                    <td>{user.email}</td>
                    <td>{user.login}</td>
                    <td>{user.registration_date}</td>
                    <td>{user.role}</td>
                    <td>
                        <a className="btn btn-red" href="#">delete</a>
                        <a className="btn btn-blue" href="#">change</a>
                        <a className="btn btn-orange" href="#" onClick={() => this.props.selectUser(user)} >info</a>
                    </td>
                </tr>
            )
        })
    }
    render () {
        return (
            <div className="table__wrap">

                <ul className="table-menu">
                    <li className="table-menu__element">Все</li>
                    <li className="table-menu__element" onClick={() => this.props.selectAdmins()}>Администраторы</li>
                    <li className="table-menu__element">Модераторы</li>
                    <li className="table-menu__element">Редакторы</li>
                    <li className="table-menu__element">Простые смертные</li>
                </ul>

                <table>
                    <thead>
                        <tr>
                            <td>ФИО</td>
                            <td>Почта</td>
                            <td>Логин</td>
                            <td>Дата регистрации</td>
                            <td>Роль</td>
                            <td>действия</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUsers()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>ФИО</td>
                            <td>Почта</td>
                            <td>Логин</td>
                            <td>Дата регистрации</td>
                            <td>Роль</td>
                            <td>действия</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}


function mapStateTpProps (state) {
    return {
        users: state.defaultUsers,
        activeUsers: state.activeUser
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        selectUser: SelectUser,
        selectAdmins: SelectAdmins
    }, dispatch)
}

export default connect(mapStateTpProps, matchDispatchToProps)(UsersList);
