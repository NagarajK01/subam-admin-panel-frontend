import React from 'react'
import { Link } from 'react-router-dom'

const ViewProduct = () => {
    return (
        <>
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-white me-2">
                            <i class="mdi mdi-format-list-bulleted"></i>
                        </span>
                        Product
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/list-category">List product</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">View product</li>
                        </ul>
                    </nav>
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div className='list-card'>
                                    <h4 class="card-title">View Category</h4>
                                    <Link to="/list-category">
                                        <button type="button" class="btn btn-gradient-primary btn-fw">Back</button>
                                    </Link>
                                </div>
                                <div class="form-group">
                                    <h6 class="card-title">Name</h6>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley not only five centuries, </p>
                                </div>
                                <div class="form-group">
                                    <h6 class="card-title">Image</h6>
                                    <p>
                                        <img src="assets/images/dashboard/img_1.jpg" class="mb-2 mw-100 w-20 rounded" alt="image" />
                                    </p>
                                </div>
                                <div class="form-group">
                                    <h6 class="card-title">Description</h6>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley not only five centuries, </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProduct