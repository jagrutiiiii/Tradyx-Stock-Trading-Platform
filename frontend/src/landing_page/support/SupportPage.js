import React, { useState } from "react";
import "../CommonPage.css";

function SupportPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend or show a success message
    alert("Support request submitted! We will get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="page-container">
      <div className="page-header">Support</div>
      <form className="page-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="How can we help you?"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          style={{ resize: "vertical", borderRadius: 8, padding: "0.9rem 1rem", border: "1px solid #bdbdbd", fontSize: "1rem" }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SupportPage;
