import { useState } from 'react';

export default function Buzon() {
  // Estado para los valores del input
  const [sugerencia, setSugerencia] = useState('');
  const [email, setEmail] = useState('');

  // Manejador de cambio para el input de sugerencia o duda
  const handleSugerenciaChange = (e) => {
    setSugerencia(e.target.value);
  };

  // Manejador de cambio para el input de email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar los datos al servidor backend
    fetch('http://localhost:5173/buzon/guardar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sugerencia, email }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error en la solicitud');
      })
      .then(data => {
        console.log('Sugerencia guardada:', data);
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
      });
  };

  return (
    <div>
      <h2>Buzón de Sugerencias y Dudas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="sugerencia">Sugerencia o Duda:</label>
          <input
            type="text"
            id="sugerencia"
            value={sugerencia}
            onChange={handleSugerenciaChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
