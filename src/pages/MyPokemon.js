import React, { useState, useEffect } from "react";
import PokemonCards from "../components/PokemonCard";
import idb from "../utils/IndexedDb";
import Loading from "../components/Loading";

function MyPokemons() {
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
      {myPokemons?.length > 0 ? (
        <PokemonCards pokemon={myPokemons} />
      ) : (
        <Loading text={"No pokemons yet! Go catch some!"} />
      )}
    </>
  );
}

export default MyPokemons;
