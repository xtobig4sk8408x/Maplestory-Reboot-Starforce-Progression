import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Signup } from './Signup.js';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch('/')
    .then((r) => {
      if(r.ok){
        r.json().then(user => {
          setUser(user)
        });
      } else {
        setUser(null)
      }
    });
  }, []);

  console.log(user)

  return (
    <Router> 
      <Routes>
        <Route exact path = "/" element={<Home user={user} setUser={setUser} />} /> 
        <Route path = "/About" element={<About user={user} setUser={setUser} />} />
        <Route path = "/Equipment" element={<Equipment user={user} setUser={setUser} />} />
        <Route path = "/Login" element={<Login user={user} setUser={setUser} />} />
        {/* <Route path = "/Profile" element={<Profile user={user} setUser={setUser} />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
