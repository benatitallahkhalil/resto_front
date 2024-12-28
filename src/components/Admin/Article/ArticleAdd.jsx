import React, { useEffect, useState } from "react";
import axios from "axios";

const ArticleAdd = () => {
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
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://localhost:7002/api/Categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories :", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7002/api/Articles", article);
      alert("Article ajouté avec succès !");
      window.location.href = "/articles";
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
    }
  };

  if (loading) return <p>Chargement des catégories...</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Ajouter un Article</h1>
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
            value={article.Nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description :
          </label>
          <textarea
            id="Description"
            name="Description"
            className="form-control"
            value={article.Description}
            onChange={handleChange}
            required
          />
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
            value={article.Prix}
            onChange={handleChange}
            required
          />
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
            value={article.ImageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="CategorieId" className="form-label">
            Catégorie :
          </label>
          <select
            id="CategorieId"
            name="CategorieId"
            className="form-select"
            value={article.CategorieId}
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
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default ArticleAdd;
