import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OffreListe = () => {
  const [offres, setOffres] = useState([]);

  useEffect(() => {
    fetchOffres();
  }, []);

  const fetchOffres = async () => {
    try {
      const response = await axios.get("https://localhost:7002/api/Offres");
      setOffres(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des offres :", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette offre ?")) {
      try {
        await axios.delete(`https://localhost:7002/api/Offres/${id}`);
        alert("Offre supprimée avec succès !");
        fetchOffres(); // Re-fetch the offers after deletion
      } catch (error) {
        console.error("Erreur lors de la suppression de l'offre :", error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Liste des Offres</h1>
      <table className="table">
      <Link to="/offres/ajouter" className="btn btn-primary">Ajouter une Offre</Link>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Remise</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offres.map((offre) => (
            <tr key={offre.id}>
              <td>{offre.titre}</td>
              <td>{offre.description}</td>
              <td>{offre.remise}%</td>
              <td>{new Date(offre.dateDebut).toLocaleDateString()}</td>
              <td>{new Date(offre.dateFin).toLocaleDateString()}</td>
              <td>
                <Link to={`/offres/mettre-a-jour/${offre.id}`} className="btn btn-warning btn-sm">
                  Modifier
                </Link>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => handleDelete(offre.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default OffreListe;
