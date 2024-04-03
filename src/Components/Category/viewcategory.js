import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import SpinnerComponent from '../Layouts/spinner'
import { useDispatch, useSelector } from 'react-redux'
import { ActionSpinnerCategory, ActionViewCategory } from '../../Action/category'
import ImportURL from '../../Common/api'

const ViewCategory = () => {
    const data = useSelector(state => state.category.category)
    const spinner = useSelector(state => state.category.spinner);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(ActionSpinnerCategory());
            dispatch(ActionViewCategory(id));
        }
    }, [dispatch, id]);
    return (
        <>
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-white me-2">
                            <i class="mdi mdi-format-list-bulleted"></i>
                        </span>
                        Category
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/list-category">List Category</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">View Category</li>
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
                                    <p>{data.name ? data.name : '---'}</p>
                                </div>
                                <div class="form-group">
                                    <h6 class="card-title">Image</h6>
                                    <p>
                                        <img src={data.image ? ImportURL.LIVEURL + data.image : "assets/images/dashboard/img_1.jpg"} class="mb-2 mw-100 w-20 rounded" alt="image" />
                                    </p>
                                </div>
                                <div class="form-group">
                                    <h6 class="card-title">Description</h6>
                                    <p>
                                        <div dangerouslySetInnerHTML={{ __html: (data.description ? data.description : '') }}></div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SpinnerComponent show={spinner} />
        </>
    )
}

export default ViewCategory
