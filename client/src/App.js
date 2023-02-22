import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
//import { Signup } from './Signup';
import Comparison from './pages/Comparison';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState();
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('/comparison')
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
    <div className="App">
      <p>text in there</p>
      {/* <Login /> */}
      {/* <NavBar jokes={jokes} setJokes={setJokes} API={API} /> */}
      <Switch>
        <Route exact path="/comparison">
          {/* <JokesForm jokes={jokes} setJokes={setJokes} API={API}/> */}
        </Route>
        <Route exact path="/comparison/:id">
          {/* <SingleJoke API={API} setJokes={setJokes} handleTrash={handleTrash} equips={equips}/> */}
        </Route>
        <Route exact path="/">
          {/* <Search search={search} setSearch={setSearch}/> }
          {/* <JokesList jokes={jokes} API={API} handleTrash={handleTrash} /> */}
        </Route>
        {/* <Route>
          <ErrorPage />
        </Route> */}
        <Route>
          {/* <Login /> */}
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
