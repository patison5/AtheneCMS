export default function (state = null, action) {
    switch (action.type) {
        case "USER_SELECTED":
            console.log('user', action.payload)
            return action.payload;
            break;
        case "ADMINS_SELECTED":
            return action.payload;
            break;
        case "ALL_USERS_SELECTED":
            return action.payload;
            break;
        case "MODERATORS_SELECTED":
            return action.payload;
            break;
        case "SLAVES_SELECTED":
            return action.payload;
            break;
        default:
            return state;
    }
}
