import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCategorie = () => {
  const { id } = useParams(); // Récupérer l'ID de la catégorie à partir de l'URL
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    imageUrl: '',
  });
  const [error, setError] = useState(null); // Pour afficher les erreurs
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategorie();
  }, []);

  // Fonction pour charger la catégorie à modifier
  const fetchCategorie = async () => {
    try {
      const response = await fetch(`https://localhost:7002/api/Categories/${id}`);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement de la catégorie');
      }
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      setError('Erreur : ' + error.message);
      console.error('Erreur lors du chargement de la catégorie:', error);
    }
  };

  // Fonction pour gérer les changements dans le formulaire
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log du contenu du formulaire

    try {
      const response = await fetch(`https://localhost:7002/api/Categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();  // Récupérer le texte d'erreur du serveur
        throw new Error(`Erreur lors de la mise à jour de la catégorie: ${errorText}`);
      }
      
      navigate('/categories'); // Rediriger après mise à jour
    } catch (error) {
      setError('Erreur : ' + error.message); // Afficher l'erreur
      console.error('Erreur :', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Modifier une catégorie</h2>
      {error && <div className="alert alert-danger">{error}</div>} {/* Affichage des erreurs */}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            type="text"
            name="nom"
            className="form-control"
            value={formData.nom}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleFormChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL de l'image</label>
          <input
            type="text"
            name="imageUrl"
            className="form-control"
            value={formData.imageUrl}
            onChange={handleFormChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Mettre à jour
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate('/categories')}
        >
          Annuler
        </button>
      </form>
    </div>
  );
};

export default UpdateCategorie;
