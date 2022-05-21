import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Context/AuthContext/useAuth';

const Login = () => {
    const { handleGoogleSignIn, handleSignin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const destination = location?.state?.from || '/';

    // Google Sign in
    const handleGoogleLogin = () => {
        handleGoogleSignIn(navigate, destination);
    };
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        // email pass sign in
        handleSignin(email, password, navigate, destination)
    };
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 p-4">
            <div className='formContainer max-w-50'>
                <h5>Login</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Email' type="email" {...register("email", { required: true })} />
                    <br />
                    <input placeholder='Password' type="password" {...register("password", { required: true })} />
                    <br />
                    <button type='submit' className='btn-regular mt-2 py-2 text-center'>Login</button>
                </form>
                <p className='mt-3'>Don't register yet?<Link to="/signup">  Signup</Link> </p>
                <h6 className='text-center'>------or------</h6>

                <button onClick={handleGoogleLogin} variant='light' className='w-100 rounded-pill border py-2'>
                    <img className='me-3' src="https://img.icons8.com/color/25/000000/google-logo.jpg" alt='' />
                    Signin with google
                </button>
            </div>
        </div>
    );
};

export default Login;