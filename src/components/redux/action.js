function logOut(payload) {
    return {
        type: "LOGOUT",
        payload: payload,
    };
}
function loginUser(payload) {
    return {
        type: "USER_DATA",
        payload: payload,
    };
}

function loginToken(payload) {
    return {
        type: "LOGIN_TOKEN",
        payload: payload,
    };
}



export { logOut, loginUser, loginToken };
