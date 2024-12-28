import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MenuListe = () => {
  const [menus, setMenus] = useState([]);

  // Fonction pour récupérer les menus depuis l'API
  const fetchMenus = async () => {
    try {
      const response = await axios.get("https://localhost:7002/api/Menus");
      const safeData = response.data.map((menu) => ({
        ...menu,
        menuArticles: menu.menuArticles || [], // Assurez que menuArticles est un tableau
      }));
      setMenus(safeData);
    } catch (error) {
      console.error("Erreur lors de la récupération des menus :", error);
    }
  };

  // Fonction pour supprimer un menu
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce menu ?")) {
      try {
        await axios.delete(`https://localhost:7002/api/Menus/${id}`);
        setMenus(menus.filter((menu) => menu.id !== id)); // Mise à jour de la liste
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      }
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Liste des Menus</h1>
      <Link to="/MenuBack/ajouter" className="btn btn-primary mb-3">
        Ajouter un menu
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Articles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menus.length > 0 ? (
            menus.map((menu) => (
              <tr key={menu.id}>
                <td>{menu.nom}</td>
                <td>{menu.description}</td>
                <td>
                  {menu.menuArticles.length > 0 ? (
                    menu.menuArticles
                      .map((ma) => ma.article?.nom || "Nom manquant") // Vérifiez la présence de l'article
                      .join(", ")
                  ) : (
                    "Aucun article"
                  )}
                </td>
                <td>
                  <Link
                    to={`/MenuBack/mettre-a-jour/${menu.id}`}
                    className="btn btn-warning me-2"
                  >
                    Modifier
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(menu.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                Aucun menu disponible
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MenuListe;
