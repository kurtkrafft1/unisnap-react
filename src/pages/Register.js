import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import { useAuth } from "../hooks/useAuth";

function Register() {
  const { login } = useAuth();
  const api = useAPI();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
    if (email.length === 0 || password.length === 0) {
      return setError("Email and password are required");
    } else if (password !== confirmPassword) {
      return setError("Passwords do not match");
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

  const navigateToLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <div className="w-full h-full pt-32 flex justify-center">
      <div className="bg-gray-100 p-4 lg:h-1/4 lg:w-1/4  md:w-1/2 sm:w-32 sm:h-1/2 rounded">
        <h1 className="text-center mb-4 text-xl font-bold">Register</h1>
        <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
          <div className="mb-2 flex flex-row justify-end">
            <label className="mr-2">Email:</label>
            <input
              type="text"
              className="bg-transparent border-b border-black focus:outline-none"
              placeholder="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2  flex flex-row justify-end">
            <label className="mr-2">Password:</label>
            <input
              type="password"
              className="bg-transparent border-b border-black focus:outline-none"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2  flex flex-row justify-end">
            <label className="mr-2">Confirm Password:</label>
            <input
              type="password"
              className="bg-transparent border-b border-black focus:outline-none"
              placeholder="confirm password"
              value={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>{error && <p className="text-red-500">{error}</p>}</div>
          <div className="w-full flex justify-center my-2">
            <button
              type="submit"
              className="bg-blue-400 px-8 rounded-full text-lg text-gray-100"
            >
              Submit
            </button>
          </div>
          <div className="w-full flex justify-center text-sm underline  ">
            <button onClick={navigateToLogin}>Already have an account</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
