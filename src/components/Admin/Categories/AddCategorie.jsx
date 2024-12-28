import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategorie = () => {
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    imageUrl: '',
  });
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7002/api/Categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de la catégorie');
      }
      navigate('/categories');
    } catch (error) {
      console.error('Erreur :', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Ajouter une catégorie</h2>
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
          Ajouter
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

export default AddCategorie;
