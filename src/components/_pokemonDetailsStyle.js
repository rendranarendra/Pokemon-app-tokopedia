import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const DetailsContainer = styled.div``;

export const DetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  box-sizing: border-box;
`;

export const DetailsImage = styled.img`
  height: 240px;
  background-color: whitesmoke;
  border-radius: 15rem;

  @media (min -width: 960px) {
    height: 260px;
  }
`;

export const DetailsNameWrapper = styled.form`
  display: flex;
  align-items: center;
`;

export const DetailsName = styled.input`
  border: 0;
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: -1rem;
  padding: 16px;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  width: 240px;
  text-align: ${({ isEdit }) => (isEdit ? "initial" : "center")};
`;

export const EditDetailsWrapper = styled.div`
  cursor: pointer;
  padding: 8px;
  border-radius: 1rem;
  margin-left: -0.8rem;
  margin-bottom: 1rem;
  background-color: #ffcb05;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition: 250ms ease;

  &:hover {
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 12px 0px;
    transform: matrix(1, 0, 0, 1, 0, 2);
    transition: 250ms ease;
  }
`;

export const EditDetails = styled.img`
  height: 16px;
`;

export const DetailsTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const DetailsValues = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const DetailsValue = styled.div`
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 16px;
  margin: 16px;
  border-radius: 2rem;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  background-color: ${({ color }) => (color ? color : "white")};
`;

export const Details = styled.div`
  flex-direction: column;
  border-left: none !important;
  border-top: 1px solid #ccc !important;

  @media (min-width: 960px) {
    margin: 16px;
    display: flex;
    border: 1px solid #ccc !important;
  }
`;

export const DetailsPokemonWrapper = styled.div``;

export const DetailsTitle = styled.div`
  margin: 16px;
  font-weight: bold;
  font-size: 14px;

  @media (min-width: 960px) {
    font-size: 64px;
  }
`;

export const DetailsButtonContainer = styled(Link)`
  bottom: 12vmin;
  left: 45%;
  right: 45%;
  transition: 250ms ease;
  text-decoration: none;
  display: flex;
  justify-content: center;
  bottom: 0;

  &:hover {
    bottom: 15%;
    transition: 250ms ease;
  }
`;

export const DetailsButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
  background-color: white;
  filter: grayscale(100%);
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  transition: 250ms ease;
  width: 240px;
  margin-bottom: 32px;

  &:hover {
    background: gray;
    color: white;
    filter: grayscale(0%);
    transition: 250ms ease;
  }
`;

export const DetailsButtonImage = styled.img`
  height: 10vmin;
`;

export const DetailsButtonText = styled.div`
  font-size: 1rem;
`;

export const ErrorMessageWrapper = styled.div`
  display: ${({ isError }) => (isError ? "block" : "none")};
`;

export const ErrMessage = styled.div`
  margin-top: 16px;
  color: red;
`;

export const CardButtonText = styled.div`
  margin: 8px;
  font-size: 0.6rem;
  font-weight: bold;
`;

export const CardButtomImg = styled.img`
  height: 4vmin;
`;

export const CardButtonWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  text-decoration: none;
  color: black;
  background-color: white;
  font-size: 0.6rem;
  font-weight: bold;
  border-radius: 10px;

  &:hover {
    box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 12px 0px;
    transform: matrix(1, 0, 0, 1, 0, 2);
    transition: 250ms ease;
  }
`;
