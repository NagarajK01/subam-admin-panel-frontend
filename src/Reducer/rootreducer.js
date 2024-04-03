import { combineReducers } from "redux";
import AcountReducer from "./account";
import ProductReducer from "./product";
import CategoryReducer from "./category";

const rootReducer = combineReducers({
    account: AcountReducer,
    product: ProductReducer,
    category: CategoryReducer,
})

export default rootReducer;