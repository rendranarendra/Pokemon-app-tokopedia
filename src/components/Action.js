import React from "react";
import back from "../images/back.svg";
import forward from "../images/forward.svg";
import sad from "../images/sad.svg";
import happy from "../images/happy.svg";
import {
  Container,
  ImageWrapper,
  Image,
  PokemonButton,
  Subtitle,
  Title,
  ButtonContainer,
} from "./_actionStyle";

function Action({ pokemon, isCatching, isSuccessful }) {
  return (
    <Container>
      <ImageWrapper>
        <Image src={isCatching && isSuccessful ? happy : sad} />
      </ImageWrapper>
      <Title>
        {isCatching && isSuccessful
          ? "SUCCESSFUL!"
          : !isCatching
          ? "RELEASED!"
          : "FAILED!"}
      </Title>
      <Subtitle>
        {isCatching && isSuccessful
          ? "Gotta catch em' all!"
          : !isCatching
          ? "Goodbye friend!"
          : "Oh no it ran away!"}
      </Subtitle>
      <ButtonContainer>
        {isCatching && isSuccessful ? (
          <PokemonButton
            to={{
              pathname: "/details",
              state: { pokemon: pokemon },
            }}
          >
            <Image src={forward} isArrow />
          </PokemonButton>
        ) : (
          <PokemonButton
            to={{
              pathname: "/",
            }}
          >
            <Image src={back} isArrow />
          </PokemonButton>
        )}
      </ButtonContainer>
    </Container>
  );
}

export default Action;
