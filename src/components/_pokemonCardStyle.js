import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`;

export const CardContainer = styled.div`
  height: auto;
  border-style: solid;
  border-color: #778899;
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
  margin: 16px;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  border-radius: 12px;
  border-width: 0.5px;
  padding: 16px;
  max-width: 192px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border-radius: 12px;
    transform: matrix(1, 0, 0, 1, 0, 2);
    transition: 250ms ease;
  }
`;

export const Img = styled.img`
  height: 160px;
  width: 160px;
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  text-decoration: none;
  font-weight: bold;
  text-transform: capitalize;
  color: black;
`;

export const Counter = styled.div`
  text-decoration: none;
  padding: 8px;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  color: #806600;
  background-color: white;
  font-weight: 700;
  width: 80px;
  margin: auto;
  text-align: center;

  @media (min-width: 768px) {
    width: 120px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 10px;
  margin: 16px;
  padding: 16px;
  font-weight: bold;
  background-color: #d3d3d3;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);

  &:hover {
    transform: matrix(1, 0, 0, 1, 0, 2);
    transition: 250ms ease;
  }
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
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  margin: 8px;
  border-radius: 2rem;
  box-shadow: rgba(49, 53, 59, 0.12) 0px 1px 6px 0px;
  background-color: ${({ color }) => (color ? color : "white")};
`;
