import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArticleListe = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get("https://localhost:7002/api/Articles");
      setArticles(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des articles :", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
      try {
        await axios.delete(`https://localhost:7002/api/Articles/${id}`);
        setArticles(articles.filter((article) => article.id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression de l'article :", error);
      }
    }
  };

  if (loading) return <p>Chargement des articles...</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des Articles</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/add-article")}
      >
        <i className="fas fa-plus me-2"></i> Ajouter un Article
      </button>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Image</th>
            <th>Prix (€)</th>
            <th>Catégorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{article.id}</td>
              <td>{article.nom}</td>
              <td>{article.description}</td>
              <td>{article.imageUrl}</td>
              <td>{article.prix.toFixed(2)}</td>
              <td>{article.categorie ? article.categorie.nom : "Aucune catégorie"}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => navigate(`/update-article/${article.id}`)}
                >
                  <i className="fas fa-edit"></i> Modifier
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(article.id)}
                >
                  <i className="fas fa-trash"></i> Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleListe;
