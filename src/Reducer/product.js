const initialState = {
    product: {},
    listproduct: [],
    spinner: false,
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_PRODUCT_CHANGE":
            return Object.assign({}, state, {
                product: {
                    ...state.product,
                    [action.name]: action.value
                }
            })
        case "LIST_PRODUCT":
            return Object.assign({}, state, {
                listproduct: action.payload,
                spinner: action.spinner,
            })
        case "VIEW_PRODUCT":
            return Object.assign({}, state, {
                product: action.payload,
                spinner: action.spinner,
            })
        case "EMPTY_PRODUCT":
            return Object.assign({}, state, {
                product: {},
            })
        case "SPINNER_PRODUCT":
            return Object.assign({}, state, {
                spinner: true,
            })
        default:
            return state
    }
}

export default ProductReducer;