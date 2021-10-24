import Dexie from "dexie";

const idb = new Dexie("Pokemon-App");

idb.version(1).stores({
  my_pokemon: "myPokemonId, id, name",
});

export const openIDBData = () => {
  idb.open().catch((err) => console.log(err));
};

export default idb;
