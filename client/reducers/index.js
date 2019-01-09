import { combineReducers } from 'redux';
import DefaultUsers from './users'
import ActiveUsers from './usersReducer'


const allReducers = combineReducers({
    defaultUsers: DefaultUsers,
    activeUser: ActiveUsers
})

export default allReducers;
