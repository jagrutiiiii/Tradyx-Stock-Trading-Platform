import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CommonPage.css";

const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  // Hide footer on signup page
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
      await axios.post("http://localhost:3002/api/signup", form);
      // Redirect to dashboard after successful 
      alert("Signup successful! Redirecting to dashboard...");
      // navigate("/dashboard");
      window.location.href = "http://localhost:3001";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">Create your Tradyx Account</div>
      <form className="page-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
