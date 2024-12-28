import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7002/api/Auth/login",
        { email, password }
      );

      const { token, nom, userId, role } = response.data;
     
      if (!userId) {
        throw new Error("ID utilisateur manquant dans la réponse du serveur.");
      }
      // Sauvegarder les données dans localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userName", nom);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userRole", role); // Enregistrer le rôle
      console.log("Utilisateur connecté :", nom, "ID :", userId);
      console.log("Utilisateur connecté :", nom);

      // Redirection conditionnelle
      if (role === "Admin") {
        navigate("/dashboard"); // Redirige vers le tableau de bord
      } else {
        navigate("/profile"); // Redirige vers la page d'accueil pour les autres rôles
      }

      window.dispatchEvent(new Event("storageUpdate"));
      alert("Connexion réussie !");
      setError(null);
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
      setError(err.response?.data?.message || "Une erreur est survenue.");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin} className="mb-3">
        <div className="mb-3">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Mot de passe :</label>
          <input
            id="password"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Se connecter
        </button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Login;
