import axios from "axios"
import ImportURL from "../Common/api"

export function AC_HANDLE_ACCOUNT_CHANGE(name, value) {
    return function (dispatch) {
        dispatch({ type: "HANDLE_ACCOUNT_CHANGE", name: name, value: value })
    }
}

export function AC_VIEW_ACCOUNT() {
    return function (dispatch) {
        return axios.get(ImportURL.API.accountDetail)
            .then((res) => {
                dispatch({ type: "VIEW_ACCOUNT", payload: res.data.data, spinner: false })
            })
            .catch(() => {
                dispatch({ type: "VIEW_ACCOUNT", payload: {}, spinner: false })
            })
    }
}

export function AC_VIEW_ACCOUNT() {
    return function (dispatch) {
        dispatch({ type: "SPINNER_ACCOUNT" })
    }
}