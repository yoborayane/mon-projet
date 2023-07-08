import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';


function App() {
  const firebaseConfig = {
  apiKey: "AIzaSyDZe_XJ-GB_YA3VfbqIY9A895a6hhytsKg",
  authDomain: "mon-projet-9e0d3.firebaseapp.com",
  projectId: "mon-projet-9e0d3",
  storageBucket: "mon-projet-9e0d3.appspot.com",
  messagingSenderId: "681500379395",
  appId: "1:681500379395:web:e27f10308569118578c136"
};
firebase.initializeApp(firebaseConfig);

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
