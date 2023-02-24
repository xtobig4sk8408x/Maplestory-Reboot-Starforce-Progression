import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import EquipsList from './components/EquipsList';
import EquipsDetail from './components/EquipsDetail'

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("")

  //Taking this out because I don't think progression in reboot should cost something
//   useEffect(() => {
//     fetch('/authorized_user')
//     .then(r => {
//         if(r.ok) { 
//             r.json().then(user => { 
//                 setUser(user);
//             });
//         } else {
//             r.json().then((errorObj => alert(errorObj.errors)));
//         }
//     });
// },[]);



  function updateUser(userData) {
    console.log(userData);
    setUser(userData);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      <Route exact path="/login">
        <Login updateUser={updateUser}/> 
        </Route>
        <Route exact path ='/logout' />
        <Route exact path="/equips">
          <EquipsList user={user}   /> 
        </Route>
        <Route exact path="/equips/:id">
          <EquipsDetail user={user} />
        </Route>
        
        <Route exact path="/signup"> 
          <Signup updateUser={updateUser}/>
        </Route>

      </Switch>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
};

export default App;
