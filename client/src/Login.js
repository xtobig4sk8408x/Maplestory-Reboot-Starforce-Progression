import {useState} from 'React' 

const Login = () => {
    const [user, setUser] = useState({
        email: "", 
        password:"" 
    }); 

    const handleChange =({target: {name, value}}) => {
        setUser(current = ? ({
            ...current, 
            [name] :value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/API/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(user)
        })
        .then(r => {
            if (r.status === 200) {
                r.json().then(userObj => console.log(userObj))
            }else {
                r.json().then(errorObj => console.log(userObj.error))

        }
        })
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}> 
                <label htmlFor='email'>Email</label>
                <input type="text" onChange={} value={} className="" name="" />
                <label></label>
                <input type="password" onChange={handleChange} value={user.password} className="form-password" name="password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}