import React from "react";
import { NavLink  } from 'react-router-dom'; 
import Logo from '../../images/logo.png'

class Navigation extends React.Component {
    render () {
        return (
            <div className="navigation__wrap">

                <img src={'/' + Logo}  alt={Logo}  className="navigation__logo"/>

                <ul className="navigation__list">
                    <div className="nav__category">
                        <li className="nav__element nav__element-title">Основные</li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/">Главная</NavLink>
                        </li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/pages">Страницы</NavLink>
                        </li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/posts">Посты</NavLink>
                        </li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/users">Пользователи</NavLink>
                        </li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/media">Медиа</NavLink>
                        </li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/tools">Инструменты</NavLink>
                        </li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/plugins">Плагины</NavLink>
                        </li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/themes">Темы</NavLink>
                        </li>
                        <li className="nav__element">
                             <NavLink className="nav__link" to="/settings">Настройки</NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}


export default Navigation;
