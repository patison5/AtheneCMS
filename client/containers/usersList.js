import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

import { SelectUser, SelectAdmins, SelectAllUsers, SelectSlaves, SelectModerators } from '../actions/index'

//tmp
import initialUsers from '../reducers/users'


class UsersList extends Component {
    showUsers () {
        if (!this.props.users)
            return <tr><td>Список пуст</td></tr>

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
                            <a className="btn btn-red" href="/users/1">delete</a>
                            <NavLink className="btn btn-blue" to="/users/1">change</NavLink>
                            <a className="btn btn-orange" href="#" onClick={() => this.props.selectUser(user)} >info</a>
                        </td>
                    </tr>
                )
            })
        }

        return this.props.users.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.name} {user.surname}</td>
                    <td>{user.email}</td>
                    <td>{user.login}</td>
                    <td>{user.registration_date}</td>
                    <td>{user.role}</td>
                    <td>
                        <a className="btn btn-red" href="/users/1">delete</a>
                        <NavLink className="btn btn-blue" to={"/users/" + index}>change</NavLink>
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
                    <li className="table-menu__element" onClick={() => this.props.selectAllUsers()}>Все</li>
                    <li className="table-menu__element" onClick={() => this.props.selectAdmins()}>Администраторы</li>
                    <li className="table-menu__element" onClick={() => this.props.selectModerators()}>Модераторы</li>
                    <li className="table-menu__element" onClick={() => this.props.selectAdmins()}>Редакторы</li>
                    <li className="table-menu__element" onClick={() => this.props.selectSlaves()}>Простые смертные</li>
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
        activeUsers: state.activeUsers
    }
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        selectAllUsers: SelectAllUsers,
        selectAdmins: SelectAdmins,
        selectModerators: SelectModerators,
        selectSlaves: SelectSlaves,
        selectUser: SelectUser
    }, dispatch)
}

export default connect(mapStateTpProps, matchDispatchToProps)(UsersList);
