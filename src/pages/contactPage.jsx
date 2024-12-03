import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({});

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
      console.log("Form submitted successfully:", formData);
      alert("Thank you for your message!");
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0", width: "100%" }}
          />
          {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
        </div>

        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0", width: "100%" }}
          />
          {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0", width: "100%" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            style={{ display: "block", margin: "10px 0", width: "100%", height: "100px" }}
          />
          {errors.body && <p style={{ color: "red" }}>{errors.body}</p>}
        </div>

        <button type="submit" style={{ padding: "10px 20px", background: "#1abc9c", color: "white", border: "none", borderRadius: "5px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
