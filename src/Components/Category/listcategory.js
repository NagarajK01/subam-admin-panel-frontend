import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import 'simple-datatables/dist/style.css';
import { DataTable } from 'simple-datatables';
import { ActionListCategory, ActionSpinnerCategory } from '../../Action/category';
import ImportURL from '../../Common/api';
import axios from 'axios';
import { Error, Success } from '../../Common/validate';
import Swal from 'sweetalert2';
import SpinnerComponent from '../Layouts/spinner';


const ListCategory = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const tableRef = useRef(null);
    const navigate = useNavigate();
    const listData = useSelector(state => state.category.listcategory);
    const spinner = useSelector(state => state.category.spinner);

    const getAPI = () => {
        dispatch(ActionSpinnerCategory());
        dispatch(ActionListCategory());
    }

    const dispatch = useDispatch();
    useEffect(() => {
        getAPI();
    }, [dispatch]);

    useEffect(() => {
        if (tableRef.current && listData && listData.length > 0) {
            new DataTable(tableRef.current, {
                searchable: true,
                sortable: true,
                perPage: 25,
                perPageSelect: [25, 50, 100],
            });
        }
    }, [listData]);

    const onChangeAction = (value, name) => {
        const { _id, status } = value;
        if (name == 'Status') {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.post(ImportURL.API.changeStatus + '/' + _id, { status: !status }).then((res) => {
                        Success(res.data ? res.data.message : '');
                        getAPI();
                    }).catch(() => {
                        Error("Internal server error");
                    })
                }
            });
        }
        if (name == 'Delete') {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.get(ImportURL.API.deleteCategory + '/' + _id).then((res) => {
                        Success(res.data ? res.data.message : '');
                        getAPI();
                    }).catch(() => {
                        Error("Internal server error");
                    })
                }
            });
        }
        if (name == 'View') {
            navigate('/view-category/' + _id);
        }
        if (name == 'Edit') {
            navigate('/edit-category/' + _id);
        }
    }

    return (
        <>
            <div class="content-wrapper">
                <div class="page-header">
                    <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-white me-2">
                            <i class="mdi mdi-format-list-bulleted"></i>
                        </span>Category
                    </h3>
                    <nav aria-label="breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">List Category</li>
                            </ol>
                        </nav>
                    </nav>
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div className='list-card'>
                                    <h4 class="card-title">List Category</h4>
                                    <Link to="/add-category">
                                        <button type="button" class="btn btn-gradient-primary btn-fw">Add</button>
                                    </Link>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped datatable" ref={tableRef} >
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
                                            {
                                                listData && listData.length > 0
                                                    ?
                                                    <>
                                                        {
                                                            listData.map((item, i) => {
                                                                return (
                                                                    <tr>
                                                                        <td> {i + 1} </td>
                                                                        <td> {item.name ? item.name : "---"} </td>
                                                                        <td className='text-align-center'>
                                                                            <img src={item.image ? ImportURL.LIVEURL + item.image : "../../assets/images/faces-clipart/pic-1.png"} alt="image" />
                                                                        </td>
                                                                        <td><div dangerouslySetInnerHTML={{ __html: (item.description ? item.description : '') }}></div></td>
                                                                        <td className='text-align-center'>
                                                                            {item.status ?
                                                                                <label class="badge badge-success" onClick={() => onChangeAction(item, "Status")}>Active</label> :
                                                                                <label class="badge badge-danger" onClick={() => onChangeAction(item, "Status")}>Inactive</label>
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            <div class="template-demo">
                                                                                <button type="button" onClick={() => onChangeAction(item, "View")} class="btn btn-gradient-primary btn-rounded btn-icon">
                                                                                    <i class="mdi mdi-eye"></i>
                                                                                </button>
                                                                                <button type="button" onClick={() => onChangeAction(item, "Edit")} class="btn btn-gradient-primary btn-rounded btn-icon">
                                                                                    <i class="mdi mdi-wrench"></i>
                                                                                </button>
                                                                                <button type="button" onClick={() => onChangeAction(item, "Delete")} class="btn btn-gradient-primary btn-rounded btn-icon">
                                                                                    <i class="mdi mdi-delete"></i>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }</>
                                                    :
                                                    <>
                                                        <tr>
                                                            <td colSpan={6}>
                                                                <div className='table-no-content'>
                                                                    <label className='form-label'>No rows to display</label>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </>
                                            }
                                        </tbody>
                                    </table>
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

export default ListCategory
