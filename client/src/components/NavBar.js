import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';

function NavBar() {
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
        <Nav> 
         <NavH1>Flatiron Theater Company</NavH1>
         <menu>
           <button onClick={handleLogOut}>Log Out</button>
           {!menu?
           <div onClick={() => setMenu(!menu)}>
             <GiHamburgerMenu size={30}/> 
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

        </Nav>
    )
}
export default NavBar;