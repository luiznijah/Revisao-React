import React, { useState } from 'react';

function Button(props) {
  const [ordem, setOrdem] = useState('ascendente');
  const [numeros, setNumeros] = useState([5, 2, 8, 1, 9]);

  function handleOrdenar() {
    if (ordem === 'ascendente') {
      setOrdem('descendente');
      setNumeros(numeros.sort((a, b) => b - a));
    } else {
      setOrdem('ascendente');
      setNumeros(numeros.sort((a, b) => a - b));
    }
  }

  return (
    <div>
      <button onClick={handleOrdenar}>Ordenar</button>
      <ul>
        {numeros.map((numero) => (
          <li key={numero}>{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default Button;
