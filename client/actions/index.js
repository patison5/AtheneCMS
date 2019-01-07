export const SelectUser = (user) => {
    //make async call to database
    return {
        type: "USER_SELECTED",
        payload: user
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
