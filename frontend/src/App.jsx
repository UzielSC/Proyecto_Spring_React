import { useState, useEffect } from "react";
function App() {
const [mensaje, setMensaje] = useState("");
useEffect(() => {
  fetch("http://localhost:8080/api/hello") // Llamada a la API de Spring Boot
  .then((response) => response.text())
  .then((data) => setMensaje(data))
  .catch((error) => console.error("Error al obtener datos:",
  error));
  }, []);
  return (
  <div>
  <h1>Conexión React + Spring Boot</h1>
  <p>{mensaje}</p>
  </div>
  );
  }
  export default App;
  