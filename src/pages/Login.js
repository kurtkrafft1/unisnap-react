import React, { useState } from "react";
import useAPI from "../hooks/useAPI";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();
  const api = useAPI();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    if (email.length === 0 || password.length === 0) {
      return setError("Email and password are required");
    }
    setError(null);
    api.post("users/login", { email, password }).then((response) => {
      console.log("response", response);
      if (response.data.error) {
        return setError(response.data.error);
      }
      console.log("login", response.data);
      login(response.data);
    });
  };

  return (
    <div className="w-full h-full pt-32 flex justify-center">
      <div className="bg-gray-100 h-1/4 w-1/4 p-4">
        <h1 className="text-center mb-4 text-xl">Login</h1>
        <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-row justify-end">
            <label className="mr-2">Email:</label>
            <input
              type="text"
              className="bg-transparent border-b border-black"
              placeholder="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2  flex flex-row justify-end">
            <label className="mr-2">Password:</label>
            <input
              type="password"
              className="bg-transparent border-b border-black"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>{error && <p className="text-red-500">{error}</p>}</div>
          <div className="w-full flex justify-center">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
