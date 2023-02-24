import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Login({updateUser}) { 
    // const [formData, setFormData] = useState({
    //     username: '', 
    //     password: ''
    // })
    
    const history = useHistory();
    // const {email, password} = formData;
    
//     function onSubmit(e){ 
//         e.preventDefault();
//         const user = { 
//             username, 
//             password
//         }
//          fetch(`/login`, {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(user)
//          })
//          .then(r => {
//             if(r.status === 204) {
//                 r.json().then(user => {
//                     updateUser(user);
//                     history.push(`/users/${user.id}`);
//                 })
//             } else {
//                 r.json().then(data => setErrors([data.error]))
//             }
//          });
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData({ ...formData, [name]: value });
//     }

//     return ( 
//         <>
//         <form onSubmit={onSubmit}>
//             <label>E-mail</label>
//             <input type='text' name='username' value={formData.username} onChange={handleChange} />
//             <label>Password</label>
//             <input type='password'name='password' value={formData.password} onChange={handleChange} />
//             <input type='submit' value='Log in!'/>
//         </form>
//         {errors? <div>{errors}</div>:null}
//         </>
//     )
// }

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState([]);

const handleEmail = (e) => { 
    setEmail(e.target.value);
}

const handlePassword = (e) => {
    setPassword(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(email)
    })
    .then(r => {
        if(r.status === 204) {
        r.json().then(user => {
            updateUser(user);
            history.push(`/users/${user.id}`);
        })
        } else {
            r.json().then(data => setErrors([data.error]))
        }
    });

}
    return ( 
        <div>
        <form onSubmit={handleSubmit}>
            <label> 
                Email: 
                <input type="email" value={email} onChange={handleEmail} />
            </label>
            <br /> 
            <label> 
                Password: 
                <input type="password" value={password} onChange={handlePassword} /> 
            </label>
            <br /> 
            <button type="submit">Login</button>
        </form>
        {errors? <div>{errors}</div>:null} 
      </div>  
    )
}
export default Login;