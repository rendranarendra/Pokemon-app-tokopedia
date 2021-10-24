import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
`;

export const Image = styled.img`
  height: ${({ isArrow }) => (isArrow ? "10vmin" : "75vmin")};

  @media (prefers-reduced-motion: no-preference) {
    animation: Zoom 1 1s ease;
  }

  @keyframes Zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @media (min-width: 960px) {
    height: ${({ isArrow }) => (isArrow ? "5vmin" : "50vmin")};
  }
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 5vmin;
`;

export const Subtitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 3vmin;
`;

export const ButtonContainer = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonButton = styled(Link)`
  background-color: #ffcb05;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  padding: 16px;
  border-radius: 10px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition: 250ms ease;

  &: hover {
    transform: matrix(1, 0, 0, 1, 0, 2);
    transition: 250ms ease;
  }
`;
