const initialState = {
    account: {},
    spinner: false,
}

const AcountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_ACCOUNT_CHANGE":
            return Object.assign({}, state, {
                account: {
                    ...state.account,
                    [action.name]: action.value
                }
            })
        case "VIEW_ACCOUNT":
            return Object.assign({}, state, {
                account: action.payload,
                spinner: action.spinner,
            })
        case "SPINNER_ACCOUNT":
            return Object.assign({}, state, {
                spinner: true,
            })
        default:
            return state
    }
}

export default AcountReducer;