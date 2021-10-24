import React from "react";
import { useLocation } from "react-router";
import Action from "../components/Action";

function MyPokemonAction() {
  const location = useLocation();

  const pokemon = location.state ? location.state.pokemon : null;
  const isCatching = location.state ? location.state.isCatching : null;
  const isSuccessful = location.state ? location.state.isSuccessful : null;

  return (
    <Action
      pokemon={pokemon}
      isCatching={isCatching}
      isSuccessful={isSuccessful}
    />
  );
}

export default MyPokemonAction;
