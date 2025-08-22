import React from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:9000/oauth2/authorize?response_type=code&client_id=oidc-client&redirect_uri=http://localhost:3000/callback&scope=openid";
  };

  return (
    <div>
      <h2>Login con OAuth2</h2>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;