import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Navbar,
  Container,
  Logo,
  Image,
  MenuWrapper,
  ExploreWrapper,
  BackpackWrapper,
} from "./_navbarStyle";
import logo from "../images/catch_em_all.svg";
import pokemon from "../images/pokemon.svg";
import backpack from "../images/backpack.svg";
import useDevice from "../hooks/useDevice";

function NavbarPokemon() {
  const [isMainPageActive, setMainPageActive] = useState(false);
  const [isSecondPageActive, setSecondPageActive] = useState(false);
  const history = useHistory();
  const { deviceType } = useDevice();

  useEffect(() => {
    if (history.location.pathname === "/my-pokemon-action") {
      window.addEventListener("beforeunload", history.replace("/"));
    }
  }, [history]);

  return (
    <Navbar>
      <Container>
        {deviceType === "desktop" && <Logo src={logo} />}
        <MenuWrapper>
          <ExploreWrapper isActive={isMainPageActive}>
            <NavLink
              to="/"
              exact
              isActive={(match) => {
                if (match?.url === "/") {
                  setMainPageActive(true);
                } else {
                  setMainPageActive(false);
                }
              }}
              style={{ textDecoration: "none" }}
            >
              <Image src={pokemon} />
              <p>Explore</p>
            </NavLink>
          </ExploreWrapper>
          <BackpackWrapper isActive={isSecondPageActive}>
            <NavLink
              to="/my-pokemon"
              exact
              isActive={(match) => {
                if (match?.url === "/my-pokemon") {
                  setSecondPageActive(true);
                } else {
                  setSecondPageActive(false);
                }
              }}
              style={{ textDecoration: "none" }}
            >
              <Image src={backpack} />
              <p>My Pokemon List</p>
            </NavLink>
          </BackpackWrapper>
        </MenuWrapper>
      </Container>
    </Navbar>
  );
}

export default NavbarPokemon;
