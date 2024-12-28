import React, { useState, useEffect } from "react"; // Ensure useEffect is imported
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Correct the import to useNavigate

const OffreAdd = () => {
  const [offre, setOffre] = useState({
    titre: "",
    description: "",
    remise: "",
    dateDebut: "",
    dateFin: "",
    articleId: "",
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Correct the usage of useNavigate()

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://localhost:7002/api/Categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffre({ ...offre, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7002/api/Offres", offre);
      alert("Offre ajoutée avec succès !");
      navigate("/offres"); // Redirect to the offer list using useNavigate
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'offre :", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Ajouter une Offre</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre</label>
          <input
            type="text"
            id="titre"
            name="titre"
            className="form-control"
            value={offre.titre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={offre.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="remise" className="form-label">Remise (%)</label>
          <input
            type="number"
            id="remise"
            name="remise"
            className="form-control"
            value={offre.remise}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateDebut" className="form-label">Date de Début</label>
          <input
            type="date"
            id="dateDebut"
            name="dateDebut"
            className="form-control"
            value={offre.dateDebut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateFin" className="form-label">Date de Fin</label>
          <input
            type="date"
            id="dateFin"
            name="dateFin"
            className="form-control"
            value={offre.dateFin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="articleId" className="form-label">Article</label>
          <select
            id="articleId"
            name="articleId"
            className="form-select"
            value={offre.articleId}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un article</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.nom}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter l'Offre</button>
      </form>
    </div>
  );
};

export default OffreAdd;
