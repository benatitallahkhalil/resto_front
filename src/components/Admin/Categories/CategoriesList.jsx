import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css'; // Importer FontAwesome
import "bootstrap/dist/css/bootstrap.min.css";
const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://localhost:7002/api/Categories');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des catégories');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Erreur :', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer cette catégorie ?')) {
      try {
        const response = await fetch(`https://localhost:7002/api/Categories/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setCategories(categories.filter((category) => category.id !== id));
        } else {
          throw new Error('Erreur lors de la suppression de la catégorie');
        }
      } catch (error) {
        console.error('Erreur :', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Liste des Catégories</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate('/add-categorie')}
      >
        <i className="fas fa-plus me-2"></i> Ajouter une catégorie
      </button>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.nom}</td>
              <td>{category.description}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => navigate(`/update-categorie/${category.id}`)}
                >
                  <i className="fas fa-edit"></i> Modifier
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(category.id)}
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

export default CategoriesList;
