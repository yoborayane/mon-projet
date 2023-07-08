import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion réussie
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h2>Bienvenue !</h2>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

