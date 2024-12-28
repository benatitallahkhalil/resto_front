import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Charger les données du profil
    const fetchProfile = async () => {
      try {
        const response = await axios.get("https://localhost:7002/api/Profil/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
    
    
        // Émettre un événement personnalisé pour que Header soit mis à jour
        window.dispatchEvent(new Event("storageUpdate"));
      } catch (err) {
        setError("Impossible de charger le profil.");
      }
    };

    // Charger l'historique des commandes
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7002/api/Profil/me/commandes",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrderHistory(response.data);
      } catch (err) {
        setError("Impossible de charger l'historique des commandes.");
      }
    };

    fetchProfile();
    fetchOrderHistory();
  }, [token]);

  const handleUpdate = async () => {
    try {
      await axios.put(
        "https://localhost:7002/api/Profil/me",
        { nom: profile.nom, email: profile.email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("Profil mis à jour avec succès.");
      setEditMode(false);
    } catch (err) {
      setError("Erreur lors de la mise à jour du profil.");
    }
  };

  return (
    <div className="container mt-5">
      <h1>Mon Profil</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      {!editMode ? (
        <div>
          <p><strong>Nom :</strong> {profile.nom}</p>
          <p><strong>Email :</strong> {profile.email}</p>
          <button className="btn btn-primary" onClick={() => setEditMode(true)}>
            Modifier
          </button>
        </div>
      ) : (
        <div>
          <label>Nom :</label>
          <input
            type="text"
            className="form-control"
            value={profile.nom || ""}
            onChange={(e) => setProfile({ ...profile, nom: e.target.value })}
          />
          <label>Email :</label>
          <input
            type="email"
            className="form-control"
            value={profile.email || ""}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <button className="btn btn-success mt-3" onClick={handleUpdate}>
            Enregistrer
          </button>
          <button className="btn btn-secondary mt-3" onClick={() => setEditMode(false)}>
            Annuler
          </button>
        </div>
      )}

      <h2 className="mt-5">Historique des Commandes</h2>
      {orderHistory.length === 0 ? (
        <p>Aucune commande trouvée.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Commande ID</th>
              <th>Date</th>
              <th>Prix Total</th>
              <th>État</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => (
              <tr key={order.commandeId}>
                <td>{order.commandeId}</td>
                <td>{new Date(order.dateCommande).toLocaleDateString()}</td>
                <td>{order.prixTotal}</td>
                <td>{order.etat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Profile;
