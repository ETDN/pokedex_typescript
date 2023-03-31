import { useParams } from "react-router-dom";

function PokemonInfo() {
  const { name, id, type, image } = useParams(); // get the `id` parameter from the URL

  // Fetch the Pokemon's info based on the `id` parameter
  return (
    <div>
      <h2>Pokemon Info:</h2>
      <p>NUMBER: {name}</p>
      <p>Id: {id}</p>
      <p>Type: {type}</p>
      {/* <img src={image} alt={name}></img> */}

      {/* Render other Pokemon info here */}
    </div>
  );
}

export default PokemonInfo;
