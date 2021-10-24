import styled from "@emotion/styled";

export const Navbar = styled.nav`
  background: white;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 10px -2px;
  transition: 250ms ease;
  width: 100%;
  height: 56px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    height: 96px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 8vmin;
`;

export const Image = styled.img`
  height: 8vmin;
  width: 8vmin;
  transition: 250ms ease;
  filter: grayscale(100%);
  margin: auto;
  align-items: center;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: auto;
  padding: 0;

  @media (min-width: 1024px) {
    padding: initial;
    margin: initial;
  }

  a {
    display: flex;
    flex-direction: column;
  }
`;

export const ExploreWrapper = styled.li`
  width: 120px;
  display: flex;
  justify-content: center;
  background-color: ${({ isActive }) => (isActive ? "grey" : "white")};
  height: 56px;

  &:hover {
    img {
      filter: grayscale(0%);
    }
  }

  img {
    filter: ${({ isActive }) =>
      isActive ? "grayscale(0%)" : "grayscale(100%)"};
  }

  p {
    box-sizing: border-box;
    margin: 0;
    text-align: center;
    padding: 0;
    font-size: 14px;
    color: black;

    @media (min-width: 1024px) {
      font-size: 17px;
    }
  }

  @media (min-width: 768px) {
    width: 168px;
    height: 96px;
  }
`;

export const BackpackWrapper = styled.li`
  width: 120px;
  display: flex;
  justify-content: center;
  background-color: ${({ isActive }) => (isActive ? "grey" : "white")};
  height: 56px;

  &:hover {
    img {
      filter: grayscale(0%);
    }
  }

  img {
    filter: ${({ isActive }) =>
      isActive ? "grayscale(0%)" : "grayscale(100%)"};
  }

  p {
    box-sizing: border-box;
    margin: 0;
    text-align: center;
    padding: 0;
    font-size: 14px;
    color: black;

    @media (min-width: 1024px) {
      font-size: 17px;
    }
  }

  @media (min-width: 768px) {
    width: 168px;
    height: 96px;
  }
`;
