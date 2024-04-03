const LIVE = false;
const LIVEURL = LIVE ? "" : "http://localhost:5500/";
const ROOTURL = LIVEURL + "api/v1/";

const API = {
    addCategory: ROOTURL + 'category/addCategory',
    listCategory: ROOTURL + 'category/listCategory',
    viewCategory: ROOTURL + 'category/viewCategory',
    updateCategory: ROOTURL + 'category/updateCategory',
    deleteCategory: ROOTURL + 'category/deleteCategory',
    changeStatus: ROOTURL + 'category/changeStatus',

    addProduct: ROOTURL + 'product/addProduct',
    listProduct: ROOTURL + 'product/listProduct',
    viewProduct: ROOTURL + 'product/viewProduct',
    updateProduct: ROOTURL + 'product/updateProduct',
    deleteProduct: ROOTURL + 'product/deleteProduct',

    login: ROOTURL + 'authentication/login',
    accountDetail: ROOTURL + 'authentication/accountDetail',
    changeAccount: ROOTURL + 'authentication/changeAccount',
}

const ImportURL = {
    API: API,
    LIVEURL: LIVEURL,
}

export default ImportURL;