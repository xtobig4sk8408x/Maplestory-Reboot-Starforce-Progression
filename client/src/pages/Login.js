import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Login({updateUser}) { 
    const [formData, setFormData] = useState({
        email: '', 
        password: ''
    })
    const [errors, setErrors] = useState([]);
    const history = useHistory();
    const {email, password} = formData;
    
    function onSubmit(e){ 
        e.preventDefault();
        const user = { 
            email, 
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
                    updateUser(user);
                    history.push(`/users/${user.id}`);
                })
            } else {
                r.json().then(json => setErrors(json.errors));
            }
         });
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    }

    return ( 
        <>
        <form onSubmit={onSubmit}>
            <label>E-mail</label>
            <input type='text' name='email' value={formData.email} onChange={handleChange} />
            <label>Password</label>
            <input type='password'name='password' value={formData.password} onChange={handleChange} />
            <input type='submit' value='Log in!' />
        </form>
        {errors? <div>{errors}</div>:null}
        </>
    )
}
export default Login