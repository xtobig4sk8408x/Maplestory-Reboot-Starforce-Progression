import React, {useState}  from 'react';
import {Link, useHistory} from 'react-router-dom';
// import {GiHamburgerMenu} from 'react-icons/gi';

function NavBar({updateUser}) {
    const [menu, setMenu] = useState(false);
    const history = useHistory();

    const handleLogOut = () => { 
        fetch('/logout', {
            method: "DELETE"
        })
        .then(r => {
            if(r.ok) { 
                updateUser(null)
                history.push('/login')
            }
        })
    }

    return (
        <nav> 
         <h1>Flatiron Theater Company</h1>
         <menu>
           <button onClick={handleLogOut}>Log Out</button>
           {!menu?
           <div onClick={() => setMenu(!menu)}>
            saa
           </div>:
           <ul>
            <li onClick={() => setMenu(!menu)}>x</li>
            <li><Link to='/users/1'>User Page</Link></li>
            <li><Link to='/users/new'>Sign Up</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/productions/new'>New Production</Link></li>
            <li><Link to='/'> Home</Link></li>
           </ul>
           }
         </menu>

        </nav>
    )
}
export default NavBar;