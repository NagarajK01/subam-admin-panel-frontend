const initialState = {
    category: {},
    listcategory: [],
    spinner: false,
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HandleCategoryChange":
            console.log("action.value", action);
            return Object.assign({}, state, {
                category: {
                    ...state.category,
                    [action.name]: action.value
                }
            })
        case "ListCategory":
            return Object.assign({}, state, {
                listcategory: action.payload,
                spinner: action.spinner,
            })
        case "ViewCategory":
            return Object.assign({}, state, {
                category: action.payload,
                spinner: action.spinner,
            })
        case "EmptyCategory":
            return Object.assign({}, state, {
                category: {},
            })
        case "SpinnerCategory":
            return Object.assign({}, state, {
                spinner: true,
            })
        default:
            return state
    }
}

export default CategoryReducer;