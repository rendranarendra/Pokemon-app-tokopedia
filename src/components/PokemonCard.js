import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, useHistory } from "react-router-dom";
import { GET_POKEMONS } from "../graphql/GetPokemon";
import {
  Container,
  CardContainer,
  Img,
  Name,
  Counter,
  ButtonContainer,
  Button,
} from "./_pokemonCardStyle";
import open_pokeball from "../images/open_pokeball.svg";
import {
  CardButtomImg,
  CardButtonText,
  CardButtonWrapper,
} from "./_pokemonDetailsStyle";
import Loading from "./Loading";
import idb from "../utils/IndexedDb";

function PokemonCards({ pokemon }) {
  const data = pokemon;
  const history = useHistory();
  const isFromMyPokemonList = history
    ? history.location.pathname === "/my-pokemon"
    : false;

  const [pokemonsData, setPokemonsData] = useState(data);
  const [limit, setLimit] = useState(40);

  const {
    loading,
    data: { pokemons: { results = [] } = {} } = {},
    error,
  } = useQuery(GET_POKEMONS, {
    variables: { limit: limit, offset: 0 },
    skip: isFromMyPokemonList,
  });

  useEffect(() => {
    if (!loading) {
      if (!isFromMyPokemonList) {
        if (results.length > 0) {
          setPokemonsData(results);
        }
      }
    }
  }, [loading, isFromMyPokemonList, results, pokemonsData]);

  const handleClick = () => {
    setLimit(limit + 20);
  };

  const handleReleasePokemon = async (myPokemonId) => {
    if (myPokemonId) {
      await idb["my_pokemon"]
        .delete(myPokemonId)
        .then(console.log("RELEASED THE POKEMON"));
    }
  };

  if (pokemonsData && !isFromMyPokemonList) {
    pokemonsData.forEach((pokemon) => {
      let count = 0;
      data?.forEach((myPokemon) => {
        if (pokemon.id === myPokemon.id) {
          count++;
        }
      });
      pokemon.count = count;
    });
  }

  if (error) {
    return (
      <>
        <Loading text={"No pokemon found!"} />
      </>
    );
  }

  return (
    <>
      <Container>
        {pokemonsData?.map((pokemon) => (
          <CardContainer
            key={!isFromMyPokemonList ? pokemon?.id : pokemon?.myPokemonId}
            pokemon={pokemon}
          >
            <Link
              to={{
                pathname: "/details",
                state: { pokemon: pokemon },
                count: pokemon.count || 0,
                isFromMyPokemonList: isFromMyPokemonList,
              }}
              style={{ textDecoration: "none" }}
            >
              <Img
                src={
                  !isFromMyPokemonList
                    ? pokemon?.image
                    : pokemon?.sprites?.front_default
                }
                isDisplay={
                  !isFromMyPokemonList
                    ? pokemon?.image
                    : pokemon?.sprites?.front_default
                }
              />
              <Name>
                {!isFromMyPokemonList ? pokemon?.name : pokemon?.name}
              </Name>
              {!isFromMyPokemonList ? (
                <Counter>Owned : {pokemon.count || 0}</Counter>
              ) : (
                <CardButtonWrapper
                  to={{
                    pathname: "/actions",
                    state: {
                      pokemon: pokemon,
                      isCatching: false,
                      count: pokemon.count || 0,
                      fromLanding: true,
                    },
                  }}
                  onClick={() => handleReleasePokemon(pokemon.myPokemonId)}
                  style={{ textDecoration: "none" }}
                  key={pokemon.id}
                >
                  <CardButtomImg src={open_pokeball} />
                  <CardButtonText>RELEASE</CardButtonText>
                </CardButtonWrapper>
              )}
            </Link>
          </CardContainer>
        ))}
      </Container>
      {!isFromMyPokemonList && (
        <ButtonContainer>
          {!loading ? (
            <Button onClick={handleClick}>Load more</Button>
          ) : (
            <Loading text={"Please Wait"} />
          )}
        </ButtonContainer>
      )}
    </>
  );
}

export default PokemonCards;
