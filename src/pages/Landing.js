import React, { useState, useEffect } from "react";
import PokemonCards from "../components/PokemonCard";
import idb, { openIDBData } from "../utils/IndexedDb";

function PokemonLanding() {
  openIDBData();

  const [myPokemons, setMyPokemons] = useState();

  const getIdb = () => {
    idb["my_pokemon"].toArray().then((data) => {
      setMyPokemons(data);
    });
  };

  useEffect(() => {
    getIdb();
  }, []);

  return (
    <>
      <PokemonCards pokemon={myPokemons} />
    </>
  );
}

export default PokemonLanding;
