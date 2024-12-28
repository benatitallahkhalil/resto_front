import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MenuArticles = ({ refreshCart }) => {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("*");

  useEffect(() => {
    // Récupérer les catégories
    fetch("https://localhost:7002/api/Categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));

    // Récupérer les articles
    fetch("https://localhost:7002/api/Articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  const handleCategoryClick = (filter) => {
    setSelectedCategory(filter);
  };

  const handleAddToCart = (article) => {
    const panierId = 1; // Exemple : ID du panier à utiliser
    const quantite = 1; // Quantité par défaut

    fetch(`https://localhost:7002/api/Paniers/${panierId}/articles/${article.id}?quantite=${quantite}`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          refreshCart(); // Met à jour le composant Panier
          alert("Article ajouté au panier !");
        } else {
          alert("Erreur lors de l'ajout au panier.");
        }
      })
      .catch((error) => console.error("Erreur API :", error));
  };

  const filteredArticles =
    selectedCategory === "*"
      ? articles
      : articles.filter((article) => article.categorie.nom.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="food_section layout_padding-bottom" id="menu">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Menu</h2>
        </div>
        <ul className="filters_menu">
          {categories.map((category) => (
            <li
              key={category.id}
              className={selectedCategory === category.nom.toLowerCase() ? "active" : ""}
              onClick={() => handleCategoryClick(category.nom)}
            >
              {category.nom}
            </li>
          ))}
        </ul>
        <div className="filters-content">
          <div className="row grid">
            {filteredArticles.map((article) => (
              <div key={article.id} className={`col-sm-6 col-lg-4 all ${article.categorie.nom.toLowerCase()}`}>
                <div className="box">
                  <div className="img-box">
                    <img src={article.imageUrl} alt={article.nom} />
                  </div>
                  <div className="detail-box">
                    <h5>{article.nom}</h5>
                    <p>{article.description}</p>
                    <div className="options">
                      <h6>${article.prix}</h6>
                      <button onClick={() => handleAddToCart(article)}>Ajouter au panier</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default MenuArticles;
