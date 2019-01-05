import { combineReducers } from 'redux';
import UsersReducers from './users'
import UserActive from './users-active'


const allReducers = combineReducers({
    users: UsersReducers,
    activeUser: UserActive
})

export default allReducers;
