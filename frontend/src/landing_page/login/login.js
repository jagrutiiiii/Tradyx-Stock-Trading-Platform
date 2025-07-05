import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CommonPage.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  // Hide footer on login page
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) footer.style.display = "none";
    return () => {
      if (footer) footer.style.display = "";
    };
  }, []);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      window.location.href = "http://localhost:3001";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">Login</div>
      <form className="page-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
