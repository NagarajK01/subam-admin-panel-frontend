import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <>
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">
                            <span class="menu-title">Dashboard</span>
                            <i class="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/list-category" class="nav-link">
                            <span class="menu-title">Category</span>
                            <i class="mdi mdi-format-list-bulleted menu-icon"></i>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/list-product" class="nav-link">
                            <span class="menu-title">Product</span>
                            <i class="mdi mdi-table-large menu-icon"></i>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/settings" class="nav-link">
                            <span class="menu-title">Settings</span>
                            <i class="mdi mdi-settings menu-icon"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default SideBar
