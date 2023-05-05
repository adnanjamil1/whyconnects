let initialState = {
    userData: null,
    token: null,
};
function userReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                userData: null,
                token: null,
            };
        case "USER_DATA":
            return { ...state, userData: action.payload };
        case "LOGIN_TOKEN":
            return { ...state, token: action.payload };
        default:
            return state;
    }
}

export default userReducer;
