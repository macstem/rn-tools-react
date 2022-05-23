import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const onFormSubmitHandler = (event) => {
        event.preventDefault();

        const loginCredentials = {
            username: username,
            password: password
        }

        setLoading(true);
        axios
            .post(process.env.BASE_URL+'/wp-json/jwt-auth/v1/token', loginCredentials)
            .then(res => {
                console.log(res);
                if(res.data.token === undefined){
                    error = res.data.message;
                    setError(true);
                    return;
                }
                setLoading(false);
                setLoggedIn(true);

                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.user_nicename);

            })
            .catch(err => {
                console.warn(err.reponse.data);
                setError(true);
            })
    }

    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn || localStorage.getItem('token')){
            navigate('/');
        }
    });

    const usernameOnChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordOnChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    return (
        <form onSubmit={onFormSubmitHandler}>
            <div className="row mb-3">
                <label htmlFor="login">Login</label>
                <input 
                    type="text" 
                    name="login" 
                    id="login" 
                    className='form-control'
                    value={username}
                    onChange={usernameOnChangeHandler}
                />
            </div>
            <div className="row mb-3">
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    nmme="password" 
                    id="password" 
                    className='form-control'
                    value={password}
                    onChange={passwordOnChangeHandler}
                />
            </div>
            <div className="row">
                <button 
                    type="submit"
                    className='btn btn-primary'
                >Login</button>
            </div>
        </form>
    );
};

export default LoginForm;