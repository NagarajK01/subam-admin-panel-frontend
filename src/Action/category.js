import axios from "axios"
import ImportURL from "../Common/api"

export function ActionHandleCategoryChange(name, value) {
    return function (dispatch) {
        dispatch({ type: "HandleCategoryChange", name: name, value: value })
    }
}

export function ActionListCategory(params = {}) {
    return function (dispatch) {
        return axios.get(ImportURL.API.listCategory, params)
            .then((res) => {
                dispatch({ type: "ListCategory", payload: res.data.data, spinner: false })
            })
            .catch(() => {
                dispatch({ type: "ListCategory", payload: [], spinner: false })
            })
    }
}

export function ActionViewCategory(id = "") {
    return function (dispatch) {
        return axios.get(ImportURL.API.viewCategory + "/" + id)
            .then((res) => {
                dispatch({ type: "ViewCategory", payload: res.data.data, spinner: false })
                return res.data.data;
            })
            .catch(() => {
                dispatch({ type: "ViewCategory", payload: {}, spinner: false })
                return;
            })
    }
}

export function ActionEmptyCategory() {
    return function (dispatch) {
        dispatch({ type: "EmptyCategory" })
    }
}

export function ActionSpinnerCategory() {
    return function (dispatch) {
        dispatch({ type: "SpinnerCategory" })
    }
}