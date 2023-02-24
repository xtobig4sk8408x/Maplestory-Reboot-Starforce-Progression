import React, {useState}  from 'react';
import {Link, useHistory} from 'react-router-dom';
// import {GiHamburgerMenu} from 'react-icons/gi';

function NavBar() {
    const [menu, setMenu] = useState(false);
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        fetch('/login', {
            method: 'POST',
        })
        .then(r => {
            if(r.status === 201) {
                setIsLoggedIn(true);
                history.push('/home');
            }
        })
    }

    const handleLogout = () => { 
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r => {
            if(r.status === 204) { 
                setIsLoggedIn(false);
                history.push('/login');
            }
        })
    }

    return (
        <nav> 
         <h1>Maplestory Reboot Progression (MSRP) </h1>
         <div>
            {isLoggedIn ? (
                <Link onClick={handleLogout} to='/logout'>Log Out</Link>
            ) : (
                <Link onClick={handleLogin} to='/login'>Log In</Link>
            )}
           <div>
            <p><Link to='/users/1'>User Page</Link></p>
            <p><Link to='/signup'>Sign Up</Link></p>
            <p><Link to='/'> Home</Link></p>
            <p><Link to ="/equipments">Equipment List</Link></p>
            <p><Link to ="/equipments/id">Equipment Stats</Link></p>
           </div>
         </div>
        </nav>
    )
}
export default NavBar;