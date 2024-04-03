import React from 'react'
import { Link } from 'react-router-dom'

const ListProduct = () => {
    return (
        <>
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-white me-2">
                            <i class="mdi mdi-format-list-bulleted"></i>
                        </span>Product
                    </h3>
                    <nav aria-label="breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">List Product</li>
                            </ol>
                        </nav>
                    </nav>
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div className='list-card'>
                                    <h4 class="card-title">List Product</h4>
                                    <Link to="/add-product">
                                        <button type="button" class="btn btn-gradient-primary btn-fw">Add</button>
                                    </Link>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> 1 </td>
                                                <td> Herman Beck </td>
                                                <td class="py-1">
                                                    <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                                                </td>
                                                <td> Use the accept attribute of the input tag. </td>
                                                <td><label class="badge badge-success"><Link to="/view-category">Completed</Link></label></td>
                                                <td>
                                                    <div class="template-demo d-flex justify-content-between flex-nowrap">
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-eye"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-wrench"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-delete"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td> 2 </td>
                                                <td> Herman Beck </td>
                                                <td class="py-1">
                                                    <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                                                </td>
                                                <td> Use the accept attribute of the input tag. </td>
                                                <td><label class="badge badge-success">Completed</label></td>
                                                <td>
                                                    <div class="template-demo d-flex justify-content-between flex-nowrap">
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-eye"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-wrench"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-delete"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td> 3 </td>
                                                <td> Herman Beck </td>
                                                <td class="py-1">
                                                    <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                                                </td>
                                                <td> Use the accept attribute of the input tag. </td>
                                                <td><label class="badge badge-danger">Pending</label></td>
                                                <td>
                                                    <div class="template-demo d-flex justify-content-between flex-nowrap">
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-eye"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-wrench"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-delete"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td> 4 </td>
                                                <td> Herman Beck </td>
                                                <td class="py-1">
                                                    <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                                                </td>
                                                <td> Use the accept attribute of the input tag. </td>
                                                <td><label class="badge badge-danger">Pending</label></td>
                                                <td>
                                                    <div class="template-demo d-flex justify-content-between flex-nowrap">
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-eye"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-wrench"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-delete"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td> 5 </td>
                                                <td> Herman Beck </td>
                                                <td class="py-1">
                                                    <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                                                </td>
                                                <td> Use the accept attribute of the input tag. </td>
                                                <td><label class="badge badge-danger">Pending</label></td>
                                                <td>
                                                    <div class="template-demo d-flex justify-content-between flex-nowrap">
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-eye"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-wrench"></i>
                                                        </button>
                                                        <button type="button" class="btn btn-gradient-primary btn-rounded btn-icon">
                                                            <i class="mdi mdi-delete"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListProduct
