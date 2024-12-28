import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticleUpdate = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({
    Nom: "",
    Description: "",
    Prix: "",
    ImageUrl: "",
    CategorieId: "",
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle();
    fetchCategories();
  }, []); // Run only once on mount

  const fetchArticle = async () => {
    try {
      const response = await axios.get(`https://localhost:7002/api/Articles/${id}`);
      setArticle(response.data); // Update the article state with fetched data
    } catch (error) {
      console.error("Erreur lors de la récupération de l'article :", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://localhost:7002/api/Categories");
      setCategories(response.data); // Fetch categories and update the state
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7002/api/Articles/${id}`, article);
      alert("Article mis à jour avec succès !");
      window.location.href = "/";
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'article :", error);
    }
  };

  if (loading) return <p>Chargement des données...</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Modifier un Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Nom" className="form-label">
            Nom :
          </label>
          <input
            type="text"
            id="Nom"
            name="Nom"
            className="form-control"
            value={article.Nom || ""}
            onChange={handleChange}
            required
          />
          <small className="form-text text-muted">Ancien nom : {article.Nom}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description :
          </label>
          <textarea
            id="Description"
            name="Description"
            className="form-control"
            value={article.Description || ""}
            onChange={handleChange}
            required
          />
          <small className="form-text text-muted">Ancienne description : {article.Description}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="Prix" className="form-label">
            Prix :
          </label>
          <input
            type="number"
            id="Prix"
            name="Prix"
            className="form-control"
            value={article.Prix || ""}
            onChange={handleChange}
            required
          />
          <small className="form-text text-muted">Ancien prix : {article.Prix}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="ImageUrl" className="form-label">
            Image URL :
          </label>
          <input
            type="text"
            id="ImageUrl"
            name="ImageUrl"
            className="form-control"
            value={article.ImageUrl || ""}
            onChange={handleChange}
          />
          <small className="form-text text-muted">Ancienne image URL : {article.ImageUrl}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="CategorieId" className="form-label">
            Catégorie :
          </label>
          <select
            id="CategorieId"
            name="CategorieId"
            className="form-select"
            value={article.CategorieId || ""}
            onChange={handleChange}
            required
          >
            <option value="">-- Sélectionnez une catégorie --</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.nom}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default ArticleUpdate;
