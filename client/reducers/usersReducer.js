export default function (state = null, action) {
    switch (action.type) {
        case "USER_SELECTED":
            return action.payload;
            break;
        case "ADMINS_SELECTED":
            console.log(action.payload)
            return action.payload;
            break;
        default:
            return state;
    }
}
