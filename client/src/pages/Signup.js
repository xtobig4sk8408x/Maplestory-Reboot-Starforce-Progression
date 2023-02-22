import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../styled/Form'; 


function Signup() {
    
    cconst [formData, setFormData] = useState({
        first_name:'',
        last_name:'', 
        username:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const {first_name, last_name, username, email, password} = formData;

    function onSubmit(e) {
        e.preventDefault();
        const user = { 
            first_name, 
            last_name, 
            username,
            email, 
            password
        }

        fetch(`/users`, {
            method: 'POST',
            HEADERS:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(r => { 
            if(r.ok){
                r.json().then(user => {
                    history.push(`users/${user.id}`);
                });
            } else { 
                r.json().then(json => setErrors(Object.entries(json.errors)));
            }
        });
    }

    const handleChange = (e) => {
        const { username, value } = e.target;
        setFormData({ ...formData, [username]: value });
    }

    return ( 
        <>
        <Form onSubmit={onSubmit}>
            <label>First Name</label>
            <input type='text' name='first name' value={first_name} onChange={handleChange} />
            <label>Last Name</label>
            <input type='text' name='last name' value={last_name} onChange={handleChange} />
            <label>Username</label>
            <input type='text' name='username' value={username} onChange={handleChange} />
            <label>Email</label>
            <input type='text' name='email' value={email} onChange={handleChange} />
            <label>Password</label>
            <input type='text' name='password' value={password} onChange={handleChange} />
        </Form>
        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}
export default Signup;