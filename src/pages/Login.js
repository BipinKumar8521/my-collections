import React, { useState } from "react";
import "../CSS/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Email: ", email);
    console.log("Password: ", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label> <br />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />{" "}
            <i
              className={`fa-solid fa-eye eye ${showPassword ? "none" : ""}`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
            <i
              className={`fa-solid fa-eye-slash eye ${
                showPassword ? "" : "none"
              }`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
