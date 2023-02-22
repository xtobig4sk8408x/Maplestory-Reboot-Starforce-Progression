import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Form} from '../styled/Form';

function Login({updateUser}) { 
    const [formData, setFormData] = useState({
        username: '', 
        password: ''
    })
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const {username, password} = formData;
    
    function onSubmit(e){ 
        e.preventDefault();
        const user = { 
            username, 
            password
        }
         fetch(`/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
         })
         .then(r => {
            if(r.ok) {
                r.json().then(user => {
                    updatedUser(user);
                    history.push(`/users/${user.id}`);
                })
            } else {
                r.json().then(json => setErrors(json.errors));
            }
         });
    }

    const handleChange = (e) => {
        const { username, value } = e.target
        setFormData({ ...formData, [username]: value });
    }

    return ( 
        <>
        <Form onSubmit={onSubmit}>
            <label>Username</label>
            <input type='text' name='username' value={username} onChange={handleChange} />
            <label>Password</label>
            <input type='password'name='password' value={password} onChange={handleChange} />
            <input type='submit' value='Log in!' />
        </Form>
        {errors? <div>{errors}</div>:null}
        </>
    )
}
export default Login