import React from "react";
import pokeball from "../images/pokeball.svg";
import { Container, ImageWrapper, Image, Text } from "./_loadingStyle";

function Loading({ text }) {
  return (
    <>
      <Container>
        <ImageWrapper>
          <Image src={pokeball} />
        </ImageWrapper>
        {text && <Text>{text}</Text>}
      </Container>
    </>
  );
}

export default Loading;
