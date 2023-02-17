import { useState } from 'react'; 

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);

        fetch('/signup', {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json' 
            },
        body: JSON.stringify({ 
            first_name: firstName, 
            last_name: lastName, 
            email,  
            password, 
            password_confirmation: passwordConfirmation
         }),
        })
        .then(r => {
            setIsLoading(false);
            if (r.ok) {
                r.json*()
                .then((data) => {
                    if (data.error){
                        console.log(data);
                        
                    }
                })
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> 
                First Name: 
                <input type="text" value={firstName} onChange={(e) => setName{e.target.value}} /> 
            </label>
            <label> 
                Last Name: 
                <input type="text" value={lastName} onChange={(e) => setName{e.target.value}} />
            </label>
            <label> 
                Email: 
                <input type="email" value={email} onChange={(e) => setEmail{e.target.value}} />
            </label>
            <label> 
                Password: 
                <input type="password" value={password} onChange={(e) => setPassword{e.target.value}} />
            </label>
            <button type="submit">Create User</button>
        </form> 
    )
}
export default Signup
            
            