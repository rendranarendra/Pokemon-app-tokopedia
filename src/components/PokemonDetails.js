import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON } from "../graphql/GetPokemon";
import {
  DetailsContainer,
  DetailsHeader,
  DetailsImage,
  DetailsNameWrapper,
  DetailsName,
  EditDetailsWrapper,
  EditDetails,
  DetailsTypeWrapper,
  DetailsValues,
  DetailsValue,
  Details,
  DetailsPokemonWrapper,
  DetailsTitle,
  DetailsButtonContainer,
  DetailsButton,
  DetailsButtonImage,
  DetailsButtonText,
  ErrorMessageWrapper,
  ErrMessage,
} from "./_pokemonDetailsStyle";
import edit from "../images/edit.svg";
import open_pokeball from "../images/open_pokeball.svg";
import pokeball from "../images/pokeball.svg";
import idb from "../utils/IndexedDb";
import { handleChangeColour } from "../utils/handleType";

function PokemonDetails(props) {
  const datas = props ? props.pokemon : null;
  const count = props.count;
  const isSuccessful = true;

  const [pokemonData, setPokemonData] = useState(
    datas?.pokemon ? datas?.pokemon : null
  );
  const [pokemonName, setPokemonName] = useState(
    pokemonData ? pokemonData.name : null
  );
  const [myPokemons, setMyPokemons] = useState();
  const [isError, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getIdb = () => {
    idb["my_pokemon"].toArray().then((data) => {
      setMyPokemons(data);
    });
  };

  const existingNameList = myPokemons
    ? myPokemons.map((pokemon) => pokemon.name)
    : [];

  const isFromMyPokemonList = datas
    ? datas.pokemon
      ? datas.pokemon.myPokemonId
        ? true
        : false
      : false
    : false;

  const {
    loading,
    data: { pokemon = [] } = {},
    error,
  } = useQuery(GET_POKEMON, {
    variables: { name: pokemonName },
    skip: isFromMyPokemonList,
  });

  const inputName = useRef();

  useEffect(() => {
    getIdb();
  }, []);

  useEffect(() => {
    if (isEditing) {
      inputName.current.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    if (!isFromMyPokemonList) {
      setPokemonData(pokemon);
    }
  }, [loading]);

  useEffect(() => {
    setPokemonData((prevData) => {
      return { ...prevData, name: pokemonName };
    });
  }, [pokemonName]);

  const handleCatchPokemon = () => {
    if (isSuccessful) {
      const pokemon = pokemonData;
      pokemon.myPokemonId = uuidv4();
      if (existingNameList.includes(pokemonName)) {
        pokemon.name = pokemon.name + count;
        setPokemonName(pokemon.name + count);
      }
      idb["my_pokemon"]
        .add({ ...pokemon })
        .then(() => console.log("SAVED TO IDB"));
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && existingNameList.includes(pokemonName)) {
      setError(true);
      setIsEditing(false);
    } else if (event.keyCode === 13) {
      handleSubmit(pokemonName);
      setError(false);
      setIsEditing(false);
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    setPokemonName(value);
  };

  const handleSubmit = () => {
    setPokemonData({ ...pokemonData, name: pokemonData.name });

    idb["my_pokemon"]
      .put({ ...pokemonData, name: pokemonData.name })
      .then(() => console.log("UPDATED TO IDB"));
    setIsEditing(false);
  };

  const handleReleasePokemon = () => {
    if (pokemonData.myPokemonId) {
      idb["my_pokemon"].delete(pokemonData.myPokemonId);
    }
  };

  const handleClick = () => {
    if (isEditing) {
      handleSubmit();
    } else {
      setIsEditing(true);

      inputName.current.focus();
    }
  };

  return (
    <DetailsContainer>
      <DetailsHeader>
        {pokemonData.sprites ? (
          <DetailsImage src={pokemonData.sprites.front_default}></DetailsImage>
        ) : null}

        <DetailsNameWrapper>
          <DetailsName
            type="text"
            ref={inputName}
            value={pokemonData.name ? pokemonData.name : ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            disabled={isEditing ? "" : "disabled"}
            isEdit={isEditing}
          />
          {isFromMyPokemonList ? (
            <EditDetailsWrapper onClick={handleClick}>
              <EditDetails src={edit} />
            </EditDetailsWrapper>
          ) : null}
        </DetailsNameWrapper>
        <ErrorMessageWrapper isError={isError}>
          <ErrMessage>Nickname Already Exist!</ErrMessage>
        </ErrorMessageWrapper>
        {pokemonData.types ? (
          <DetailsTypeWrapper>
            <DetailsValues>
              {pokemonData.types.map((type) => (
                <DetailsValue
                  key={type.type.name}
                  color={handleChangeColour(type.type.name)}
                >
                  {type.type.name}
                </DetailsValue>
              ))}
            </DetailsValues>
          </DetailsTypeWrapper>
        ) : null}
      </DetailsHeader>
      {!isFromMyPokemonList ? (
        <DetailsButtonContainer
          to={{
            pathname: "/actions",
            state: {
              pokemon: pokemonData,
              isCatching: true,
              isSuccessful: isSuccessful,
            },
          }}
          onClick={handleCatchPokemon}
          key={pokemon.id}
        >
          <DetailsButton>
            <DetailsButtonImage src={pokeball} />
            <DetailsButtonText>CATCH</DetailsButtonText>
          </DetailsButton>
        </DetailsButtonContainer>
      ) : (
        <DetailsButtonContainer
          to={{
            pathname: "/actions",
            state: {
              pokemon: pokemon,
              isCatching: false,
            },
          }}
          onClick={handleReleasePokemon}
          key={pokemon.id}
        >
          <DetailsButton>
            <DetailsButtonImage src={open_pokeball} />
            <DetailsButtonText>Release</DetailsButtonText>
          </DetailsButton>
        </DetailsButtonContainer>
      )}

      <Details>
        {pokemonData.abilities ? (
          <DetailsPokemonWrapper>
            <DetailsTitle>ABILITIES</DetailsTitle>
            <DetailsValues>
              {pokemonData.abilities.map((ability) => (
                <DetailsValue key={ability.ability.name}>
                  {ability.ability.name}
                </DetailsValue>
              ))}
            </DetailsValues>
          </DetailsPokemonWrapper>
        ) : null}
        {pokemonData.moves ? (
          <DetailsPokemonWrapper>
            <DetailsTitle>MOVES</DetailsTitle>
            <DetailsValues>
              {pokemonData.moves.map((move) => (
                <DetailsValue key={move.move.name}>
                  {move.move.name}
                </DetailsValue>
              ))}
            </DetailsValues>
          </DetailsPokemonWrapper>
        ) : null}
      </Details>
    </DetailsContainer>
  );
}

export default PokemonDetails;
