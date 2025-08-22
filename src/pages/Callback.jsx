import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Callback() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    if (code) {
      console.log("Auth code recibido:", code);

      // 👉 Ahora hay que intercambiarlo por el token
      axios.post("http://localhost:8080/auth/token", { code })
        .then(res => {
          console.log("Access Token:", res.data);
          // Podés guardar el token en localStorage o context
          localStorage.setItem("access_token", res.data.access_token);
        })
        .catch(err => {
          console.error("Error al pedir token:", err);
        });
    }
  }, [location]);

  return <h2>Procesando login...</h2>;
}