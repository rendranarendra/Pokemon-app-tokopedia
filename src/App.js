import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Global, css } from "@emotion/react";
import NavbarPokemon from "./components/Navbar";
import PokemonLanding from "./pages/Landing";
import DetailsPage from "./pages/Details";
import MyPokemons from "./pages/MyPokemon";
import MyPokemonAction from "./pages/PokemonAction";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <NavbarPokemon />
          <Global
            styles={css`
              * {
                font-family: "PT Sans", sans-serif;
                box-sizing: border-box;
              }
            `}
          />
          <Switch>
            <Route path="/" exact component={PokemonLanding} />
            <Route path="/details" exact component={DetailsPage} />
            <Route path="/my-pokemon" exact component={MyPokemons} />
            <Route path="/actions" exact component={MyPokemonAction} />
          </Switch>
          <Global />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
