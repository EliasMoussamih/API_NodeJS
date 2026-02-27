import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Appel vers l'API NodeJS qui tourne sur http://localhost:3000
    axios.get('http://localhost:3000/')
      .then(response => {
        setMessage(JSON.stringify(response.data));
      })
      .catch(err => {
        setError('Erreur lors de la connexion à l\'API');
      });
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Test connexion à l'API NodeJS</h1>
      {message && <div><strong>Réponse API :</strong> <pre>{message}</pre></div>}
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
}

export default App;
