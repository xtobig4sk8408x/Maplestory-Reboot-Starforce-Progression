import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { Form } from '../styled/Form'; 

function Signup({updateUser}) {
    
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'', 
        username:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    // const {first_name, last_name, username, email, password} = formData;

    function onSubmit(e) {
        e.preventDefault();

        fetch(`/users`, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(r => { 
            if(r.status === 201){
                r.json().then(user => {
                    updateUser(user);
                    history.push(`users/${user.id}`);
                });
            } else { 
                r.json().then(json => setErrors(Object.entries(json.errors)));
            }
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value,  });
        // console.log(e.target.name);
        // console.log(formData);
    }

    return ( 
        <>
        <form onSubmit={onSubmit}>
            <label>First Name</label>
            <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} />
            <label>Last Name</label>
            <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} />
            <label>Username</label>
            <input type='text' name='username' value={formData.username} onChange={handleChange} />
            <label>Email</label>
            <input type='text' name='email' value={formData.email} onChange={handleChange} />
            <label>Password</label>
            <input type='text' name='password' value={formData.password} onChange={handleChange} />
        </form>
        <button>Sign up</button>
        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}
export default Signup;