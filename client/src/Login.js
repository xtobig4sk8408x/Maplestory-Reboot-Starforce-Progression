import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Signup from './pages/Signup';
import { Navigate } from 'react-router-dom';

function Login ({user, setUser}) {
    const [showLogin, setShowLogin] = useState(true);
    if(user){ 
        return <Navigate to = "/" /> 
    }
    return ( 
        <div> 
        { showLogin ? <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={showLogin} /> : <Signup setUser={setUser} setShowLogin={setShowLogin} showLogin={showLogin} /> }
        </div>
    )
}