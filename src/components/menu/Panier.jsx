import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Panier.css";

const Panier = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); // Récupère l'ID utilisateur
  const panierId =1; // Exemple : ici, panierId est lié à userId
  console.log("panierId:", panierId, "userId:", userId);
  // Récupérer les articles du panier
  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`https://localhost:7002/api/Paniers/${panierId}`);
      setItems(response.data.items); // Assurez-vous que `data.items` est correct
    } catch (error) {
      console.error("Erreur lors de la récupération du panier :", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Supprimer un article du panier
  const handleRemoveFromCart = async (item) => {
    try {
      const response = await axios.delete(
        `https://localhost:7002/api/Paniers/${panierId}/articles/${item.articleId}`
      );
      if (response.status === 200) {
        fetchCartItems(); // Rafraîchir le panier après suppression
      } else {
        alert("Erreur lors de la suppression.");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  // Calculer le prix total
  const calculateTotalPrice = () =>
    items.reduce((total, item) => total + item.prixUnitaire * item.quantite, 0);

  // Passer la commande
  const handlePasserCommande = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Veuillez vous connecter pour passer une commande.");
        return;
      }

      const response = await axios.post(
        `https://localhost:7002/api/Commandes/creerDepuisPanier/${panierId}?userId=${userId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Commande passée avec succès !");
      const commande = response.data;

      // Redirige vers la page de paiement avec l'ID de la commande
      navigate(`/paiement`, { state: { commandeId: commande.id } });
    } catch (error) {
      console.error("Erreur lors du passage de la commande :", error);
      alert("Une erreur est survenue lors du passage de la commande.");
    }
  };

  return (
    <div className="panier_section">
      <h2>Mon Panier</h2>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="panier_items">
          {items.map((item, index) => (
            <div key={index} className="panier_item">
              <span>{item.article.nom}</span>
              <span>
                {item.quantite} x {item.prixUnitaire.toFixed(2)} €
              </span>
              <button onClick={() => handleRemoveFromCart(item)}>Supprimer</button>
            </div>
          ))}
          <div className="total_price">
            <h3>Total: {calculateTotalPrice().toFixed(2)} €</h3>
          </div>
          <button className="btn btn-success mt-3" onClick={handlePasserCommande}>
            Passer la commande
          </button>
        </div>
      )}
    </div>
  );
};

export default Panier;
