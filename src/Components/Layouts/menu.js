import React from 'react'
import Header from './header'
import SideBar from './sidebar'
import ListDashboard from '../Dashboard/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListCategory from '../Category/listcategory'
import AddCategory from '../Category/addcategory'
import ViewCategory from '../Category/viewcategory'
import ListProduct from '../Product/listproduct'
import AddProduct from '../Product/addproduct'
import ViewProduct from '../Product/viewproduct'
import Login from '../Authentication/login'
import NotFound from '../Authentication/notfound'

const authToken = localStorage.getItem('authToken');

const Menu = () => {
    return (
        <>
            {
                authToken ?
                    <>
                        <Router>
                            <div class="container-scroller">
                                <Header />
                                <div class="container-fluid page-body-wrapper">
                                    <SideBar />
                                    <div class="main-panel">
                                        <Routes>
                                            <Route path="/login" element={<Login />} />
                                            <Route path="/view-category/:id" element={<ViewCategory />} />
                                            <Route path="/view-product/:id" element={<ViewProduct />} />
                                            <Route path="/add-category" element={<AddCategory />} />
                                            <Route path="/add-product" element={<AddProduct />} />
                                            <Route path="/list-category" element={<ListCategory />} />
                                            <Route path="/list-product" element={<ListProduct />} />
                                            <Route path="/edit-category/:id" element={<AddCategory />} />
                                            <Route path="/edit-product/:id" element={<AddProduct />} />
                                            <Route path="/" element={<ListDashboard />} />
                                            <Route path="*" element={<NotFound />} />
                                        </Routes>
                                    </div>
                                </div>
                            </div>
                        </Router>
                    </>
                    :
                    <>
                        <Router>
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/" element={<Login />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Router>
                    </>
            }
        </>
    )
}

export default Menu
