import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Paiement.css"; // Import de la feuille de style

const Paiement = () => {
  const location = useLocation();
  const { commandeId } = location.state || {};
  const [amount, setAmount] = useState(0);

  const handlePaiement = async (method) => {
    try {
      const url =
        method === "paypal"
          ? "https://localhost:7002/api/Payment/paypal"
          : "https://localhost:7002/api/Payment/stripe";

      const response = await axios.post(url, amount);
      alert(`Paiement effectué avec ${method} !`);
      console.log("Détails du paiement :", response.data);
    } catch (error) {
      console.error("Erreur lors du paiement :", error);
      alert("Une erreur est survenue lors du paiement.");
    }
  };

  return (
    <div className="paiement-container">
      <div className="paiement-box">
        <h2>Paiement pour la commande #{commandeId}</h2>
        <div className="input-group">
          <label htmlFor="amount">Montant à payer (€)</label>
          <input
            id="amount"
            type="number"
            className="form-control"
            placeholder="Entrez le montant"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button
            className="btn btn-paypal"
            onClick={() => handlePaiement("paypal")}
          >
            Payer avec PayPal
          </button>
          <button
            className="btn btn-stripe"
            onClick={() => handlePaiement("stripe")}
          >
            Payer avec Stripe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paiement;
