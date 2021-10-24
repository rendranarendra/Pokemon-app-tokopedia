import React from "react";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router";
import PokemonDetails from "../components/PokemonDetails";

function DetailsPage() {
  const location = useLocation();
  const pokemon = location.state ? location.state : null;
  const count = pokemon?.pokemon?.count || 0;

  return (
    <>
      {pokemon ? (
        pokemon && <PokemonDetails pokemon={pokemon} count={count} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default DetailsPage;
