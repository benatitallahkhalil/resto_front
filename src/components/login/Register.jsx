import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7002/api/Auth/register", {
        nom,
        email,
        password,
      });
      console.log("Inscription réussie :", response.data);
      setSuccess("Inscription réussie ! Vous pouvez vous connecter.");
      setError(null);
      setNom("");
      setEmail("");
      setPassword("");

      // Navigate to login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      console.error("Erreur lors de l’inscription :", err);
      setError(err.response?.data?.message || "Une erreur est survenue.");
      setSuccess(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Inscription</h1>
      <form onSubmit={handleRegister} className="mb-3">
        <div className="mb-3">
          <label>Nom :</label>
          <input
            type="text"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email :</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          S'inscrire
        </button>
      </form>
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Register;
