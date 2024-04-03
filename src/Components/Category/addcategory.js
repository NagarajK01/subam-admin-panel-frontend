import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CKEditor } from 'ckeditor4-react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionEmptyCategory, ActionHandleCategoryChange, ActionSpinnerCategory, ActionViewCategory } from '../../Action/category';
import ImportURL from '../../Common/api';
import axios from 'axios';
import { Error, Success } from '../../Common/validate';
import { useNavigate } from 'react-router-dom';
import SpinnerComponent from '../Layouts/spinner';

function createObjectURL(object) {
    return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
}

const AddCategory = () => {
    const data = useSelector(state => state.category.category)
    const spinner = useSelector(state => state.category.spinner);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [componentType, setComponentType] = useState("Add");
    const [nameError, setNameError] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [showCkEditor, setShowCkEditor] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(ActionSpinnerCategory());
            dispatch(ActionViewCategory(id)).then((data) => {
                setShowCkEditor(true);
            }).catch(() => setShowCkEditor(true))
            setComponentType("Edit");
        } else {
            setShowCkEditor(true)
            dispatch(ActionEmptyCategory());
        }
    }, [dispatch, id]);

    const onChangeEditor = (e) => {
        let value = e.editor.getData();
        dispatch(ActionHandleCategoryChange('description', value));
        setDescriptionError(false);
    }
    const onchangeInput = (e) => {
        const { name, value, files } = e.target;
        if (name == 'name') {
            dispatch(ActionHandleCategoryChange(name, value));
            setNameError(false);
        }
        if (name == 'image') {
            dispatch(ActionHandleCategoryChange(name, files[0]));
            setImageError(false);
        }
    }
    const submit = () => {
        var sendData = data ? { ...data } : {};
        for (let key in sendData) {
            if (data.hasOwnProperty(key) && typeof sendData[key] === 'string') {
                sendData[key] = sendData[key].trim();
            }
        }
        let valid = 1;
        if (!sendData.name) {
            valid = 0;
            setNameError(true);
        }
        if (!sendData.description) {
            valid = 0;
            setImageError(true);
        }
        if (!sendData.image) {
            valid = 0;
            setDescriptionError(true);
        }
        if (valid) {
            const formData = new FormData();
            for (let key in sendData) {
                formData.append(key, sendData[key])
            }
            if (componentType == "Add") {
                axios.post(ImportURL.API.addCategory, formData).then((res) => {
                    Success(res.data ? res.data.message : '');
                    navigate('/list-category');
                }).catch(() => {
                    Error("Internal server error");
                })
            } else {
                axios.post(ImportURL.API.updateCategory + "/" + id, formData).then((res) => {
                    Success(res.data ? res.data.message : '');
                    navigate('/list-category');
                }).catch(() => {
                    Error("Internal server error");
                })
            }
        }
    }
    console.log("data", data);
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
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/list-category">List Category</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{componentType + " Category"}</li>
                        </ul>
                    </nav>
                </div>
                <div class="row">
                    <div class="col-lg-12 grid-margin stretch-card">
                        <div class="card">
                            <div class="card-body">
                                <div className='list-card'>
                                    <h4 class="card-title">{componentType + " Category"}</h4>
                                    <Link to="/list-category">
                                        <button type="button" class="btn btn-gradient-primary btn-fw">Back</button>
                                    </Link>
                                </div>
                                <form class="forms-sample">
                                    <div class="form-group">
                                        <label className="form-label">Name</label>
                                        <input type="text" class="form-control" placeholder="Name" name="name" value={data.name ? data.name : ''} onChange={onchangeInput} />
                                        {nameError ? <div className='required-message'>Name is required</div> : ''}
                                    </div>
                                    <div class="form-group">
                                        <label className="form-label">Image</label>
                                        <input type="file" class="form-control" placeholder="Image" name="image" accept="image/png,image/gif,image/jpeg" onChange={onchangeInput} />
                                        {data.image ?
                                            <img className="mt-2 mw-100 w-20 rounded" src={(typeof data.image == 'string') ? ImportURL.LIVEURL + data.image : createObjectURL(data.image)} alt="image" />
                                            : ''}
                                        {imageError ? <div className='required-message'>Image is required</div> : ''}
                                    </div>
                                    <div class="form-group">
                                        <label className="form-label">Description</label>
                                        {
                                            showCkEditor ?
                                                <CKEditor
                                                    initData={data.description ? data.description : ''}
                                                    data={data.description ? data.description : ''}
                                                    onChange={onChangeEditor}
                                                />
                                                : ''
                                        }
                                        {descriptionError ? <div className='required-message'>Description is required</div> : ''}
                                    </div>
                                    <button type="button" onClick={submit} class="btn btn-gradient-primary me-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SpinnerComponent show={spinner} />
        </>
    )
}

export default AddCategory
