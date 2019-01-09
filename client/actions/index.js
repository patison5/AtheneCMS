export const SelectUser = (user) => {
    //make async call to database
    return {
        type: "USER_SELECTED",
        payload: user
    }
};

// setting users reducers (tabs on the top pannel)
export const SelectAllUsers = () => {
    //make async call to database
    let allUsers = [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            email: "gohnDoe@gmain.com",
            login: "gohndohe",
            registration_date: "06.01.2019",
            role: "Slave"
        },
        {
            id: 2,
            name: "Fedor",
            surname: "Penin",
            email: "lulex.py@gmain.com",
            login: "Lulex.py",
            registration_date: "06.01.2019",
            role: "Admin"
        },
        {
            id: 1,
            name: "Peter",
            surname: "Jackson",
            email: "peterj@gmain.com",
            login: "peterJackson",
            registration_date: "06.01.2019",
            role: "moderator"
        },
        {
            id: 3,
            name: "Roma",
            surname: "Matveev",
            email: "romaBeorn@gmain.com",
            login: "RomaBeorn",
            registration_date: "06.01.2019",
            role: "Admin"
        },
        {
            id: 2,
            name: "Fedor",
            surname: "Penin",
            email: "lulex.py@gmain.com",
            login: "Lulex.py",
            registration_date: "06.01.2019",
            role: "Admin"
        },
    ]
    return {
        type: "ALL_USERS_SELECTED",
        payload: allUsers
    }
};

export const SelectModerators = () => {
    //make async call to database
    let moderators =  [
        {
            id: 1,
            name: "Peter",
            surname: "Jackson",
            email: "peterj@gmain.com",
            login: "peterJackson",
            registration_date: "06.01.2019",
            role: "moderator"
        }
    ]
    return {
        type: "MODERATORS_SELECTED",
        payload: moderators
    }
};


export const SelectSlaves = () => {
    //make async call to database
    let slaves =  [
        {
            id: 1,
            name: "John",
            surname: "Doe",
            email: "gohnDoe@gmain.com",
            login: "gohndohe",
            registration_date: "06.01.2019",
            role: "Slave"
        }
    ]
    return {
        type: "SLAVES_SELECTED",
        payload: slaves
    }
};
export const SelectAdmins = () => {
    //make async call to database
    //temporary list...
    let admins =  [
        {
            id: 2,
            name: "Fedor",
            surname: "Penin",
            email: "lulex.py@gmain.com",
            login: "Lulex.py",
            registration_date: "06.01.2019",
            role: "Admin"
        },
        {
            id: 3,
            name: "Roma",
            surname: "Matveev",
            email: "romaBeorn@gmain.com",
            login: "RomaBeorn",
            registration_date: "06.01.2019",
            role: "Admin"
        }
    ]
    return {
        type: "ADMINS_SELECTED",
        payload: admins
    }
};
