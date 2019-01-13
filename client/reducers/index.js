import { combineReducers } from 'redux';
import DefaultUsers from './users'
import SelectedUsers from './usersReducer'


const allReducers = combineReducers({
    defaultUsers: DefaultUsers,
    activeUsers: SelectedUsers,
    setectedSingleUser : SelectedUsers
})

export default allReducers;
