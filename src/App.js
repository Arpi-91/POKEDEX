import React from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import AllPokemons from "./components/AllPokemons/AllPokemons";
import Pokemon from "./components/PokemonPage/Pokemon";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pokedex" replace />} />

      <Route path="/pokedex" element={<AllPokemons />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
  );
}
