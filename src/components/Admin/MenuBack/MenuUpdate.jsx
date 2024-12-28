import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const MenuUpdate = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState({
    nom: "",
    description: "",
    imageUrl: "",
    menuArticles: [],
  });

  const [articles, setArticles] = useState([]); // Liste des articles disponibles
  const navigate = useNavigate();

  useEffect(() => {
    fetchMenu();
    fetchArticles();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(`https://localhost:7002/api/Menus/${id}`);
      setMenu(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération du menu :", error);
    }
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get("https://localhost:7002/api/Articles");
      setArticles(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des articles :", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenu({ ...menu, [name]: value });
  };

  const handleArticleSelection = (articleId) => {
    const updatedMenuArticles = menu.menuArticles.some((ma) => ma.articleId === articleId)
      ? menu.menuArticles.filter((ma) => ma.articleId !== articleId)
      : [...menu.menuArticles, { articleId }];
    setMenu({ ...menu, menuArticles: updatedMenuArticles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://localhost:7002/api/Menus/${id}`, {
        ...menu,
        menuArticles: menu.menuArticles.map((ma) => ({
            articleId: ma.articleId || ma.id, // Ensure this matches the backend structure
          })),
      });
      alert("Menu mis à jour avec succès !");
      navigate("/MenuBack");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du menu :", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Modifier le Menu</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="form-control"
            value={menu.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={menu.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            URL de l'image
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="form-control"
            value={menu.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Articles</label>
          <div>
            {articles.map((article) => (
              <div key={article.id} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`article-${article.id}`}
                  checked={menu.menuArticles.some((ma) => ma.articleId === article.id)}
                  onChange={() => handleArticleSelection(article.id)}
                />
                <label
                  htmlFor={`article-${article.id}`}
                  className="form-check-label"
                >
                  {article.nom}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default MenuUpdate;
