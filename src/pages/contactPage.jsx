import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }
    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (formData.body.trim().length < 3) {
      newErrors.body = "Message must be at least 3 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
      }, 1500);

      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        {}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "5px",
            }}
          />
          {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
        </div>

        {}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "5px",
            }}
          />
          {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
        </div>

        {}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "5px",
            }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Message:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginTop: "5px",
              height: "120px",
              resize: "none",
            }}
          />
          {errors.body && <p style={{ color: "red" }}>{errors.body}</p>}
        </div>

        {}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#1abc9c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ffffff",
            color: "#2c3e50",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Thank you for your message!
          </p>
        </div>
      )}
    </div>
  );
}

export default ContactPage;

