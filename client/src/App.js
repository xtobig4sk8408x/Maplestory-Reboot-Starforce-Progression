import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetchProductions("authorized_user")
    .then(r => {
      if(r.ok){
        r.json().then(user => {
          SpeechSynthesisUtterance(user)
        })
      } else {
        setUser(null)
      }
    })
  })

  const fetchEquipments = () => {
    fetch('/equipments') 
    .then
  }

  const updateUser = () => console.log() 

  const deleteProduction = (id) => setProductions(current => current.filter)

  co


  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
