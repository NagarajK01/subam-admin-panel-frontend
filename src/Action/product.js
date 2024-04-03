import axios from "axios"
import ImportURL from "../Common/api"

export function AC_HANDLE_PRODUCT_CHANGE(name, value) {
    return function (dispatch) {
        dispatch({ type: "HANDLE_PRODUCT_CHANGE", name: name, value: value })
    }
}

export function AC_LIST_PRODUCT(params = {}) {
    return function (dispatch) {
        return axios.get(ImportURL.API.listProduct, params)
            .then((res) => {
                dispatch({ type: "LIST_PRODUCT", payload: res.data.data, spinner: false })
            })
            .catch(() => {
                dispatch({ type: "LIST_PRODUCT", payload: [], spinner: false })
            })
    }
}

export function AC_VIEW_PRODUCT(id = "") {
    return function (dispatch) {
        return axios.get(ImportURL.API.viewProduct + "/" + id)
            .then((res) => {
                dispatch({ type: "VIEW_PRODUCT", payload: res.data.data, spinner: false })
            })
            .catch(() => {
                dispatch({ type: "VIEW_PRODUCT", payload: {}, spinner: false })
            })
    }
}

export function AC_EMPTY_PRODUCT() {
    return function (dispatch) {
        dispatch({ type: "EMPTY_PRODUCT" })
    }
}

export function AC_VIEW_PRODUCT() {
    return function (dispatch) {
        dispatch({ type: "SPINNER_PRODUCT" })
    }
}