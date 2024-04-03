import axios from 'axios';
import React from 'react';
import { useState } from "react";
import ImportURL from '../../Common/api';
import { Error, Success, capitalizeFirstLetter } from '../../Common/validate';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const submit = () => {
        let valid = 1;
        if (!email) {
            setEmailError(true);
            valid = 0;
        }
        if (!password) {
            setPasswordError(true);
            valid = 0;
        }
        if (valid) {
            axios.post(ImportURL.API.login, { email: email, password: password }).then((res) => {
                if (res.data) {
                    Success(res.data.message)
                    // console.log("res.data", res.data);
                    localStorage.setItem('authToken', res.data.token);
                    window.location.href = '/';
                }
            }).catch(({ response }) => {
                if (response && response.data && response.data.message) {
                    Error(response.data.message);
                } else {
                    Error("Bad request");
                }
            })
        }
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        if (name == 'email') {
            setEmail(value);
            setEmailError(false);
        }
        if (name == 'password') {
            setPassword(value);
            setPasswordError(false);
        }
    }
    const forgotPassword = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure you want to forget your password?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    text: "Your password has been changed. Please check your registered email ID.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <>
            <div class="container-scroller login-page">
                <div class="container-fluid page-body-wrapper full-page-wrapper">
                    <div class="content-wrapper d-flex align-items-center auth">
                        <div class="row flex-grow">
                            <div class="col-lg-4 mx-auto">
                                <div class="auth-form-light text-left p-4">
                                    <div class="brand-logo">
                                        <img src="../../assets/images/logo.svg" />
                                        <h2><small class="text-muted">Login</small></h2>
                                    </div>
                                    <form>
                                        <div class="form-group">
                                            <label className="form-label">Email<span className="form-required">*</span></label>
                                            <input type="email" class="form-control" id="email" value={email} name='email' placeholder="Email" onChange={onChange} />
                                            {emailError ? <div className='required-message'>Email is required</div> : ''}
                                        </div>
                                        <div class="form-group">
                                            <label className="form-label">Password<span className="form-required">*</span></label>
                                            <input type="password" class="form-control" id="password" name='password' value={password} placeholder="Password" onChange={onChange} />
                                            {passwordError ? <div className='required-message'>Password is required</div> : ''}
                                        </div>
                                        <div class="d-flex justify-content-start">
                                            <div class="auth-link text-black" onClick={forgotPassword}>Forgot password?</div>
                                        </div>
                                        <div class="mt-3">
                                            <div class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" onClick={submit}>SIGN IN</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
