import React, { useState } from "react";
import "../CSS/Signup.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsPasswordMatch(false);
      return;
    }
    setEmail("");
    setPassword("");
    setConfirm("");
    console.log("Form submitted");
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsPasswordMatch(true);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label> <br />
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => {
                setConfirm(e.target.value);
                setIsPasswordMatch(true);
              }}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {!isPasswordMatch && (
          <p className="error">Password and Confirm Password do not match</p>
        )}
      </div>
    </div>
  );
}
