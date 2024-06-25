import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { Button, Form } from "react-bootstrap";
import "../css/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Dispatch to Redux store and update state with user information
      dispatch(login({ username: data.username, token: data.token }));

      // page after successful login
      navigate("/Home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleLogin} className="login-form">
        <table>
          <tbody>
            <tr>
              <td>
                <Form.Label>Username:</Form.Label>
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Label>Password:</Form.Label>
              </td>
              <td>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <Button type="submit">Login</Button>
              </td>
            </tr>
          </tbody>
        </table>
        {error && <p className="error-message">{error}</p>}
      </Form>
    </div>
  );
};

export default Login;
