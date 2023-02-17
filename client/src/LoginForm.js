import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function LoginForm({ setUser, showLogin, setShowLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setSerrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) { 
        e.preventDefault();
        setIsLoading(true);
        fetch('/login', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({ email, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((data) => {
                    if (data.error){ 
                        console.log(data.error) 
                        return data.error;
                    }
                    console.log(data);
                    setUser(data);
                });
            } else { 
                r.json()
                .then((err) => setSerrors(err.errors));
            }
        });
    }

    return ( 
        <>
        <Navbar /> 
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign in</h3>
                    <div className="text-center">
                        Not registered yet?
                        <span className="link-priary" onClick={() => setShowLogin(!showLogin)}>
                            Sign up!
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input 
                        type="email" 
                        className="form-control m1-1" 
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input 
                        type="password" 
                        classNae="form-control mt-1" 
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="submit">
                        <button type="submit" className="btn-priary">
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                    </div>
                    <p className="forgot-password"> 
                    <Link to ="/" className="forgotten-password">Forgot password?</Link>
                    </p>
                    <div>
                        {errors.map((err) => (
                            <error key={err}>{err}</error>
                        ))}
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}