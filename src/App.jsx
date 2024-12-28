import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Profile from "./components/Client/Profile";
import Dashboard from "./components/Admin/Dashboard";
import CategoriesList from "./components/Admin/Categories/CategoriesList";
import AddCategorie from "./components/Admin/Categories/AddCategorie";
import UpdateCategorie from "./components/Admin/Categories/UpdateCategorie";
import ArticleAdd from "./components/Admin/Article/ArticleAdd";
import ArticleUpdate from "./components/Admin/Article/ArticleUpdate";
import ArticleListe from "./components/Admin/Article/ArticleListe";
import OffreListe from "./components/Admin/Offer/OffreListe";
import OffreAdd from "./components/Admin/Offer/OffreAdd";
import OffreUpdate from "./components/Admin/Offer/OffreUpdate";
import MenuListe from "./components/Admin/MenuBack/MenuListe";
import MenuAdd from "./components/Admin/MenuBack/MenuAdd";
import MenuUpdate from "./components/Admin/MenuBack/MenuUpdate";
import MenuArticles from "./components/menu/MenuArticles.jsx";
import Feedback from "./components/menu/Feedback.jsx";
import Panier from "./components/menu/Panier.jsx";
import Paiement from "./components/menu/Paiement.jsx";


function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/add-categorie" element={<AddCategorie />} />
          <Route path="/update-categorie/:id" element={<UpdateCategorie />} />
          <Route path="/articles" element={<ArticleListe />} />
          <Route path="/add-article" element={<ArticleAdd />} />
          <Route path="/update-article/:id" element={<ArticleUpdate />} />
          <Route path="/offres" element={<OffreListe />} />
          <Route path="/offres/ajouter" element={<OffreAdd />} />
          <Route path="/offres/mettre-a-jour/:id" element={<OffreUpdate />} />
          <Route path="/MenuBack" element={<MenuListe />} />
          <Route path="/MenuBack/ajouter" element={<MenuAdd />} />
          <Route path="/MenuBack/mettre-a-jour/:id" element={<MenuUpdate />} />
          <Route path="/menu" element={<MenuArticles />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/paiement" element={<Paiement />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
