import { combineReducers } from 'redux';
import defaultUsers from './users'
import UserActive from './usersReducer'


const allReducers = combineReducers({
    defaultUsers: defaultUsers,
    activeUser: UserActive
})

export default allReducers;
