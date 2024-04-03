import React from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
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
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/list-category">List Product</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Add Product</li>
                        </ul>
                    </nav>
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div className='list-card'>
                                    <h4 class="card-title">Add Product</h4>
                                    <Link to="/list-category">
                                        <button type="button" class="btn btn-gradient-primary btn-fw">Back</button>
                                    </Link>
                                </div>
                                <form class="forms-sample">
                                    <div class="form-group">
                                        <label for="exampleInputName1">Category</label>
                                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputName1">Name</label>
                                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Name" />
                                    </div>
                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" class="form-control" name="image" accept="image/png,image/gif,image/jpeg" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleTextarea1">Description</label>
                                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-gradient-primary me-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct 
