import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Context/AuthContext/useAuth';

const Signup = () => {
    const { handleGoogleSignIn, handleSignup } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const destination = location?.state?.from || '/';

    const handleGoogleLogin = () => {
        handleGoogleSignIn(navigate, location)
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const photoURL = data.img;
        const password = data.password;
        const password2 = data.password2;
        if (password === password2) {
            handleSignup(email, password, name, photoURL, navigate, destination)
        }
        else {
            alert("Password don't match")
        }
    };
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className='formContainer'>
                <h5>Signup</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' type="text" {...register("name", { required: true })} />
                    <br />
                    <input placeholder='Email' type="email" {...register("email", { required: true })} />
                    <br />
                    <input placeholder='Password' type="password" {...register("password", { required: true })} />
                    <br />
                    <input placeholder='Re-enter password' type="password" {...register("password2", { required: true })} />
                    <br />
                    <input placeholder='Image url' type="text" {...register("img", { required: true })} />
                    <br />
                    <button type='submit' className='btn-regular mt-2 py-2 text-center'>Signup</button>
                </form>
                <p className='mt-3'>Already have an account?<Link to="/login">  Login</Link> </p>
                <h6>------or------</h6>

                <button onClick={handleGoogleLogin} variant='light' className='w-100 rounded-pill border'>
                    <img className='me-3' src="https://img.icons8.com/color/25/000000/google-logo.png" alt='' />
                    Signin with google
                </button>
            </div>
        </div>
    );
};

export default Signup;